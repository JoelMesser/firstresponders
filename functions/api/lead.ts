/**
 * Cloudflare Pages Function — POST /api/lead
 *
 * 1. Parses JSON (JS path) or form-urlencoded (no-JS path).
 * 2. Verifies Cloudflare Turnstile.
 * 3. Validates required fields + honeypot.
 * 4. Sends the lead via Resend.
 * 5. Returns JSON for the JS path; redirects to /contact?sent=1 for the no-JS path.
 *
 * Required env (set in Cloudflare Pages → Settings → Environment variables,
 * and in .dev.vars for local `wrangler pages dev`):
 *   - TURNSTILE_SECRET_KEY   Cloudflare Turnstile secret
 *   - RESEND_API_KEY         Resend API key
 *   - LEAD_TO_EMAIL          where leads are delivered
 *   - LEAD_FROM_EMAIL        verified Resend sender, e.g. "leads@yourdomain.com"
 */

interface Env {
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  LEAD_TO_EMAIL: string;
  LEAD_FROM_EMAIL: string;
}

interface LeadFields {
  name: string;
  phone: string;
  address: string;
  damageType: string;
  message: string;
  emergency: string;
  company: string; // honeypot
  'cf-turnstile-response': string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  if (!token) return false;
  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  const outcome = (await res.json()) as { success: boolean };
  return outcome.success === true;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const contentType = request.headers.get('content-type') || '';
  const wantsJson =
    contentType.includes('application/json') ||
    (request.headers.get('accept') || '').includes('application/json');

  // --- Parse body (both encodings) ---
  let fields: Partial<LeadFields> = {};
  try {
    if (contentType.includes('application/json')) {
      fields = await request.json();
    } else {
      const form = await request.formData();
      fields = Object.fromEntries(form.entries()) as unknown as Partial<LeadFields>;
    }
  } catch {
    return wantsJson
      ? json({ error: 'Invalid request body.' }, 400)
      : Response.redirect(new URL('/contact?error=1', request.url).toString(), 303);
  }

  const get = (k: keyof LeadFields) => (fields[k] ?? '').toString().trim();

  // --- Honeypot: silently accept (don't tip off bots) ---
  if (get('company')) {
    return wantsJson
      ? json({ ok: true })
      : Response.redirect(new URL('/contact?sent=1', request.url).toString(), 303);
  }

  // --- Validate ---
  const name = get('name');
  const phone = get('phone');
  const damageType = get('damageType');
  if (!name || !phone || !damageType) {
    return wantsJson
      ? json({ error: 'Please fill in your name, phone, and type of damage.' }, 400)
      : Response.redirect(new URL('/contact?error=1', request.url).toString(), 303);
  }

  // --- Turnstile ---
  const ok = await verifyTurnstile(
    get('cf-turnstile-response'),
    env.TURNSTILE_SECRET_KEY,
    request.headers.get('CF-Connecting-IP'),
  );
  if (!ok) {
    return wantsJson
      ? json({ error: 'Spam check failed. Please try again or call us.' }, 400)
      : Response.redirect(new URL('/contact?error=1', request.url).toString(), 303);
  }

  // --- Compose + send via Resend ---
  const address = get('address');
  const message = get('message');
  const emergency = get('emergency') ? 'YES — ACTIVE EMERGENCY' : 'No';
  const subject = `${get('emergency') ? '🚨 EMERGENCY ' : ''}Lead: ${name} — ${damageType}`;
  const html = `
    <h2>New Lead — First Response Property Solutions</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>Address</strong></td><td>${escapeHtml(address) || '—'}</td></tr>
      <tr><td><strong>Damage Type</strong></td><td>${escapeHtml(damageType)}</td></tr>
      <tr><td><strong>Emergency</strong></td><td>${emergency}</td></tr>
      <tr><td><strong>Message</strong></td><td>${escapeHtml(message) || '—'}</td></tr>
    </table>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.LEAD_FROM_EMAIL,
        to: [env.LEAD_TO_EMAIL],
        reply_to: undefined,
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error('Resend error:', res.status, detail);
      throw new Error('email_failed');
    }
  } catch (err) {
    console.error('Lead send failed:', err);
    return wantsJson
      ? json({ error: 'We could not send your request. Please call us directly.' }, 502)
      : Response.redirect(new URL('/contact?error=1', request.url).toString(), 303);
  }

  return wantsJson
    ? json({ ok: true })
    : Response.redirect(new URL('/contact?sent=1', request.url).toString(), 303);
};
// Non-POST methods receive an automatic 405 from Pages (only onRequestPost is exported).

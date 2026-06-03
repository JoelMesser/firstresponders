/**
 * Minimal local types for Cloudflare Pages Functions so we don't need to pull
 * in @cloudflare/workers-types. If you later add that package, you can delete
 * this file. These cover only what functions/api/lead.ts uses.
 */
interface EventContext<Env = unknown> {
  request: Request;
  env: Env;
  params: Record<string, string>;
  next: (input?: Request) => Promise<Response>;
  waitUntil: (promise: Promise<unknown>) => void;
}

type PagesFunction<Env = unknown> = (
  context: EventContext<Env>,
) => Response | Promise<Response>;

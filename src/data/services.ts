/**
 * Service catalog — drives /services, /services/[slug], nav grids, and Service
 * JSON-LD. All copy is PLACEHOLDER (TODO(client): replace with real copy).
 *
 * `icon` is a key resolved by the Icon component (inline SVG, no icon lib).
 */

export interface Service {
  slug: string;
  title: string; // short label, e.g. "Power Washing"
  name: string; // full service name for schema, e.g. "Power Washing & Exterior Cleaning"
  icon: string;
  blurb: string; // 1-line teaser for cards
  /** Hero / intro paragraph on the detail page. */
  intro: string;
  /** "The problem" — what the customer is dealing with. */
  problem: string;
  /** Ordered process steps. */
  process: { title: string; body: string }[];
  /** Why choose us, service-specific. */
  why: string[];
  /** "Good to know" note specific to this service (pricing, scope, scheduling). */
  note: string;
}

// TODO(client): replace all placeholder copy below with real, reviewed content.
export const services: Service[] = [
  {
    slug: 'property-management',
    title: 'Property Management Support',
    name: 'Property Management & Maintenance',
    icon: 'key',
    blurb: 'Turnovers, maintenance, and on-call repairs for landlords and property managers.',
    intro:
      'One reliable crew for your properties. We handle turnovers, recurring maintenance, and on-call repairs for landlords, property managers, and out-of-town owners — documented, cleanly invoiced, and done when we say.',
    problem:
      'Juggling a different vendor for every small job — repairs, cleaning, inspections, hauling — burns hours and invites no-shows. Owners and managers need one accountable contact who shows up, communicates, and keeps the property rent-ready.',
    process: [
      {
        title: 'Walkthrough & punch list',
        body: 'We walk the property with you (or for you) and build a clear punch list with photos.',
      },
      {
        title: 'Scope & estimate',
        body: 'You get an itemized estimate — what we recommend now, and what can wait.',
      },
      {
        title: 'Scheduled work',
        body: 'One crew handles repairs, cleaning, yard work, and hauling on a schedule you approve.',
      },
      {
        title: 'Report & invoice',
        body: 'Before/after photos and a clean, itemized invoice — easy to file or pass through to owners.',
      },
    ],
    why: [
      'One contact for repairs, maintenance, inspections, and hauling',
      'Photo documentation before and after every job',
      'Clean, itemized invoices that are easy to pass through to owners',
    ],
    note: 'We support single rentals up to small portfolios. Ask about recurring maintenance visits and per-property pricing — estimates are always free.',
  },
  {
    slug: 'property-inspections',
    title: 'Property Inspections',
    name: 'Property & Site Inspections',
    icon: 'clipboard',
    blurb: 'Roof, drainage, gutter, and fence inspections with clear photo reports.',
    intro:
      'Know the condition of your property before small issues become expensive ones. We inspect roofs, drainage, gutters, fences, and exteriors, then hand you a straightforward photo report with recommendations — not a sales pitch.',
    problem:
      'Deferred problems are quiet: a clogged downspout, ponding water at the foundation, a leaning fence post, lifted shingles. By the time they announce themselves, the repair bill has multiplied.',
    process: [
      {
        title: 'Schedule a visit',
        body: 'Pick a time that works — occupied or vacant, we coordinate access.',
      },
      {
        title: 'On-site inspection',
        body: 'Roof and drainage, gutters, fences and gates, exterior surfaces, and trouble spots you flag.',
      },
      {
        title: 'Photo report',
        body: 'A clear written summary with photos: what is fine, what needs attention, what is urgent.',
      },
      {
        title: 'Fix-it options',
        body: 'If you want repairs, we quote them separately — no obligation, no pressure.',
      },
    ],
    why: [
      'Plain-language reports with photos, not jargon',
      'We can fix what we find — or just hand you the report',
      'Great for rentals: move-in/move-out and seasonal checkups',
    ],
    note: 'Inspections work standalone or bundled with a service visit. Landlords: ask about seasonal inspection schedules for your units.',
  },
  {
    slug: 'handyman-services',
    title: 'Handyman Services',
    name: 'Handyman & General Repairs',
    icon: 'tools',
    blurb: 'Interior and exterior repairs, punch lists, and odd jobs — handled.',
    intro:
      'Doors that stick, fixtures that wobble, drywall dings, the punch list that keeps growing. We knock out repairs and small projects inside and out in one scheduled visit — done right, cleaned up, and crossed off your list.',
    problem:
      "Small repairs are hard to hire for: big contractors won't take them, and unvetted help is a gamble. So the list grows — and small problems (a loose rail, a soft board, a sagging gate) become safety issues and bigger bills.",
    process: [
      {
        title: 'Send your list',
        body: 'Tell us what needs doing — photos help. No job list is too small.',
      },
      {
        title: 'Estimate & schedule',
        body: 'We quote the visit up front and book a window that works for you.',
      },
      {
        title: 'One efficient visit',
        body: 'We arrive with the right tools and materials and work through the list.',
      },
      {
        title: 'Walkthrough',
        body: 'You review the work with us before we leave. Clean site, no surprises.',
      },
    ],
    why: [
      'One visit handles a whole punch list — efficient labor, not per-job markups',
      'Veteran & first-responder work ethic: on time, squared away',
      'Honest advice when something is beyond a repair',
    ],
    note: 'Hourly labor with a clear estimate up front. Bundle several small jobs into one visit to get the most from the trip charge.',
  },
  {
    slug: 'power-washing',
    title: 'Power Washing',
    name: 'Power Washing & Exterior Cleaning',
    icon: 'spray',
    blurb: 'Siding, brick, porches, patios, and pavers — years of grime gone in a day.',
    intro:
      'Nothing transforms a property faster. We power wash siding (vinyl and brick, single or two-story), stone porches, patios, walkways, and pavers — restoring curb appeal and protecting surfaces from grime, mold, and algae buildup.',
    problem:
      'Maryland humidity feeds algae, mildew, and grime on every exterior surface. It looks bad, gets slippery underfoot, and slowly degrades siding, mortar, and pavers — and it never gets better on its own.',
    process: [
      {
        title: 'Surface assessment',
        body: 'Vinyl, brick, stone, and concrete each get the right pressure and detergent.',
      },
      {
        title: 'Prep & protect',
        body: 'We protect plants, fixtures, and openings before any water flows.',
      },
      {
        title: 'Wash & rinse',
        body: 'Methodical, top-down cleaning — including two-story siding and tight paver joints.',
      },
      {
        title: 'Final walkthrough',
        body: 'We inspect every surface with you and leave the site clean and drained.',
      },
    ],
    why: [
      'Right pressure for each surface — no stripped siding or etched mortar',
      'Two-story homes, patios, stone porches, and paver walkways',
      'Pairs well with gutter cleaning and yard cleanup in one visit',
    ],
    note: 'Most homes are done in a day. Bundling power washing with gutter cleaning or yard cleanup saves on the combined visit — ask for a package price.',
  },
  {
    slug: 'gutter-services',
    title: 'Gutter Services',
    name: 'Gutter Cleaning, Flush & Repair',
    icon: 'gutter',
    blurb: 'Cleaning, downspout flushing, re-securing, and minor repairs.',
    intro:
      'Gutters only work when water actually moves through them. We clear debris, flush every downspout, re-secure loose runs, and make minor repairs — then check that water drains away from your foundation like it should.',
    problem:
      'Clogged or sagging gutters dump water against your foundation and behind your fascia. That turns into rot, basement moisture, and landscape erosion — hundreds in maintenance deferred into thousands in repairs.',
    process: [
      {
        title: 'Clear & clean',
        body: 'All debris scooped and bagged from gutter runs — not blown into the yard.',
      },
      {
        title: 'Flush & test',
        body: 'Every downspout flushed and verified flowing, end to end.',
      },
      {
        title: 'Re-secure & repair',
        body: 'Loose hangers, separated seams, and minor damage fixed on the spot where possible.',
      },
      {
        title: 'Drainage check',
        body: 'We confirm water exits away from the foundation and flag anything bigger.',
      },
    ],
    why: [
      'Flush-tested downspouts — not just scooped gutters',
      'Minor repairs handled in the same visit',
      'Photo documentation of before and after',
    ],
    note: 'Most Maryland homes need gutter cleaning twice a year — late fall and spring. Ask about recurring visits so it never gets missed.',
  },
  {
    slug: 'yard-cleanup',
    title: 'Yard & Overgrowth Cleanup',
    name: 'Yard Cleanup & Overgrowth Removal',
    icon: 'leaf',
    blurb: 'Overgrowth, saplings, and roots cleared — beds, pavers, and fence lines reclaimed.',
    intro:
      'When a yard gets away from you — or from a tenant — we bring it back. We clear overgrowth from beds, pavers, and fence lines, remove saplings and roots, and haul everything away so the property looks managed again.',
    problem:
      'Overgrowth lifts pavers, roots work into walkways and foundations, and volunteer saplings turn into trees in the wrong places. Left alone, a scruffy yard becomes hardscape damage — and a red flag to neighbors, buyers, and inspectors.',
    process: [
      {
        title: 'Walk & scope',
        body: 'We agree on exactly what gets cleared, trimmed, and removed.',
      },
      {
        title: 'Cut & clear',
        body: 'Overgrowth, brush, and volunteer saplings removed — including from paver joints and fence lines.',
      },
      {
        title: 'Root removal',
        body: 'Problem roots dug or ground out so they stop lifting hardscape.',
      },
      {
        title: 'Haul & tidy',
        body: 'All green waste hauled away. The property is left clean, not piled.',
      },
    ],
    why: [
      'Saplings and roots actually removed — not just cut to regrow',
      'Pavers and walkways cleared without damage',
      'Debris hauled away as part of the job',
    ],
    note: 'Great before listing a property, between tenants, or after a season of deferred maintenance. We can quote from photos for straightforward jobs.',
  },
  {
    slug: 'debris-removal',
    title: 'Debris & Waste Removal',
    name: 'Debris & Waste Removal',
    icon: 'truck',
    blurb: 'Junk, brush, and project debris hauled away — no HAZMAT.',
    intro:
      'Tenant left a mess? Project debris piling up? We load and haul junk, brush, and construction debris responsibly — so your property is clean, safe, and ready for what is next. (No hazardous materials.)',
    problem:
      'Debris attracts pests, kills curb appeal, and can violate county code or an HOA. Renting a dumpster means loading it yourself; we bring the labor and the truck.',
    process: [
      {
        title: 'Tell us the pile',
        body: 'Photos and a rough size are enough for a quick estimate.',
      },
      {
        title: 'We load it',
        body: 'Our crew does the lifting — inside, outside, garage, or yard.',
      },
      {
        title: 'We haul it',
        body: 'Responsible disposal and recycling where possible.',
      },
      {
        title: 'Swept clean',
        body: 'The area is left broom-clean, with photos to confirm.',
      },
    ],
    why: [
      'Labor included — we load, you point',
      'Great for turnovers, cleanouts, and post-project cleanup',
      'Clear up-front pricing by volume',
    ],
    note: 'We do not handle hazardous materials (paint, chemicals, asbestos, fuel). Ask and we will point you to the right county disposal resource.',
  },
  {
    slug: 'fence-gate',
    title: 'Fence & Gate Repair',
    name: 'Fence & Gate Repair',
    icon: 'fence',
    blurb: 'Sagging gates, leaning posts, and damaged sections — squared away.',
    intro:
      'A fence is only as good as its weakest post. We repair sagging gates, reset leaning posts, replace damaged boards and hardware, and inspect the full run so your fence is solid, straight, and secure.',
    problem:
      'Gates sag, posts rot at the ground line, and one failed section lets pets out and liability in. Full fence replacement is expensive — most fences just need the right repairs at the right time.',
    process: [
      {
        title: 'Fence inspection',
        body: 'We walk the full run and document every post, panel, and hinge that needs attention.',
      },
      {
        title: 'Repair plan',
        body: 'An itemized estimate: repair what is sound, replace only what is not.',
      },
      {
        title: 'The fix',
        body: 'Posts reset, gates rehung and aligned, hardware and boards replaced.',
      },
      {
        title: 'Final check',
        body: 'Every gate swings, latches, and locks the way it should.',
      },
    ],
    why: [
      'Repair-first approach — replacement only when it is truly needed',
      'Gate alignment and hardware done right, not forced',
      'Fence inspections available standalone for rentals and sales',
    ],
    note: 'Wood, vinyl, and chain-link. If a fence is beyond repair, we will tell you straight and quote the honest options.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

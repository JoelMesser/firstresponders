/**
 * Service catalog — drives /services, /services/[slug], nav grids, and Service
 * JSON-LD. All copy is PLACEHOLDER (TODO(client): replace with real copy).
 *
 * `icon` is a key resolved by the Icon component (inline SVG, no icon lib).
 */

export interface Service {
  slug: string;
  title: string; // short label, e.g. "Water Damage"
  name: string; // full service name for schema, e.g. "Water Damage Restoration"
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
  /** Insurance note specific to this service. */
  insurance: string;
}

// TODO(client): replace all placeholder copy below with real, reviewed content.
export const services: Service[] = [
  {
    slug: 'water-damage',
    title: 'Water Damage',
    name: 'Water Damage Restoration',
    icon: 'water',
    blurb: 'Burst pipes, floods, and leaks — fast extraction and structural drying.',
    intro:
      'Water spreads fast and damage compounds by the hour. Our crews extract standing water, dry the structure, and stop secondary damage like warping and mold before it starts.',
    problem:
      'A burst pipe, appliance failure, roof leak, or flood can saturate floors, drywall, and framing within minutes. Left untreated, moisture wicks into wall cavities and subfloors, leading to mold and rot.',
    process: [
      { title: 'Emergency response', body: 'We answer 24/7 and dispatch quickly to stop the source and assess the damage.' },
      { title: 'Water extraction', body: 'Truck-mounted and portable extractors remove standing water fast.' },
      { title: 'Drying & dehumidification', body: 'Air movers and commercial dehumidifiers dry structure and contents, monitored with moisture meters.' },
      { title: 'Cleanup & restoration', body: 'We clean, sanitize, and rebuild affected areas back to pre-loss condition.' },
    ],
    why: [
      'Rapid 24/7 dispatch to limit secondary damage',
      'Moisture mapping and documented drying logs for your claim',
      'Direct insurance billing and adjuster coordination',
    ],
    insurance:
      'Most homeowner policies cover sudden, accidental water damage. We document moisture readings and damage for your adjuster and bill your insurer directly.',
  },
  {
    slug: 'fire-smoke-damage',
    title: 'Fire & Smoke Damage',
    name: 'Fire & Smoke Damage Restoration',
    icon: 'fire',
    blurb: 'Soot, smoke odor, and structural cleanup after a fire.',
    intro:
      'After the fire is out, soot and smoke keep doing damage. We clean, deodorize, and rebuild — handling the heavy, hazardous, and detailed work so you can recover.',
    problem:
      'Smoke and soot are acidic and travel everywhere, etching surfaces and saturating contents with odor. Firefighting water adds a second layer of damage that must be dried out immediately.',
    process: [
      { title: 'Assessment & securing', body: 'We assess structural safety and board up or tarp to secure the property.' },
      { title: 'Water removal & drying', body: 'We address water and chemicals left from firefighting efforts.' },
      { title: 'Soot & smoke cleanup', body: 'Specialized cleaning of surfaces, contents, and HVAC removes soot and residue.' },
      { title: 'Deodorization & rebuild', body: 'Odor neutralization followed by full reconstruction of damaged areas.' },
    ],
    why: [
      'Soot and odor remediation, not just surface cleaning',
      'Contents cleaning and pack-out when needed',
      'One team from board-up through full reconstruction',
    ],
    insurance:
      'Fire damage is typically covered under homeowner and commercial policies. We document the loss thoroughly and coordinate directly with your insurance.',
  },
  {
    slug: 'mold-remediation',
    title: 'Mold Remediation',
    name: 'Mold Remediation',
    icon: 'mold',
    blurb: 'Containment, removal, and remediation of mold growth.',
    intro:
      'Mold is a moisture problem first and a cleaning problem second. We contain the area, remove affected materials safely, and fix the source so it does not return.',
    problem:
      'Mold can begin growing within 24-48 hours of water exposure and may hide inside walls, under flooring, and in HVAC systems. It can affect air quality and damage building materials.',
    process: [
      { title: 'Inspection & containment', body: 'We identify affected areas and contain them to prevent spore spread.' },
      { title: 'Air filtration', body: 'HEPA air scrubbers and negative air machines capture airborne spores.' },
      { title: 'Removal & cleaning', body: 'We remove and dispose of affected materials and clean salvageable surfaces.' },
      { title: 'Source correction & restoration', body: 'We address the underlying moisture and restore the area.' },
    ],
    why: [
      'Proper containment to protect the rest of your home',
      'We fix the moisture source, not just the visible mold',
      'Clear documentation of the remediation performed',
    ],
    insurance:
      'Coverage for mold varies by policy and cause. We document the source and remediation, and help you understand what your insurer is likely to cover.',
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage',
    name: 'Storm Damage Repair',
    icon: 'storm',
    blurb: 'Wind, hail, and flooding damage — emergency response and repair.',
    intro:
      'Storms hit fast and leave properties exposed. We provide emergency board-up and tarping, then handle water mitigation and full repairs.',
    problem:
      'High winds, fallen trees, hail, and flooding can breach roofs and walls, letting water pour in and exposing your property to further loss until it is secured.',
    process: [
      { title: 'Emergency securing', body: 'Board-up, roof tarping, and water diversion to stop ongoing damage.' },
      { title: 'Water mitigation', body: 'Extraction and drying of any water intrusion from the storm.' },
      { title: 'Debris & damage assessment', body: 'We remove debris and document all storm-related damage.' },
      { title: 'Repairs & reconstruction', body: 'Roofing, structural, and interior repairs back to pre-loss condition.' },
    ],
    why: [
      '24/7 emergency board-up and tarping',
      'Full-service from securing the property to final repairs',
      'Storm-damage documentation for your claim',
    ],
    insurance:
      'Storm and wind damage is commonly covered. We photograph and document everything and work directly with your adjuster.',
  },
  {
    slug: 'sewage-biohazard',
    title: 'Sewage & Biohazard',
    name: 'Sewage & Biohazard Cleanup',
    icon: 'biohazard',
    blurb: 'Safe cleanup and sanitization of sewage and biohazards.',
    intro:
      'Sewage backups and biohazards are health risks, not DIY jobs. We clean, disinfect, and safely dispose of contaminated materials with the proper protective equipment.',
    problem:
      'Sewage backups (Category 3 "black water") and other biohazards contain bacteria and pathogens. Improper cleanup risks illness and lingering contamination.',
    process: [
      { title: 'Containment & safety', body: 'We isolate the area and use proper PPE and protocols.' },
      { title: 'Extraction & removal', body: 'Contaminated water and unsalvageable materials are removed and disposed of safely.' },
      { title: 'Cleaning & disinfection', body: 'Affected areas are cleaned and sanitized with EPA-registered disinfectants.' },
      { title: 'Drying & restoration', body: 'We dry the structure and restore the space to a safe condition.' },
    ],
    why: [
      'Trained, equipped crews for hazardous cleanup',
      'Proper disposal and disinfection protocols',
      'Discreet, respectful service',
    ],
    insurance:
      'Sewage backup may require specific policy endorsements. We document the loss and help you navigate coverage.',
  },
  {
    slug: 'selective-demolition',
    title: 'Selective Demolition',
    name: 'Selective Demolition',
    icon: 'demolition',
    blurb: 'Careful removal of damaged materials to prep for restoration.',
    intro:
      'Restoration often starts with controlled removal. We strip out damaged materials precisely — protecting what can be saved and preparing the structure for rebuild.',
    problem:
      'Water-, fire-, and mold-damaged materials must be removed before drying and rebuilding can succeed. Done carelessly, demolition damages salvageable structure and spreads contamination.',
    process: [
      { title: 'Scope & protection', body: 'We identify what must come out and protect adjacent areas.' },
      { title: 'Controlled removal', body: 'Damaged drywall, flooring, and materials are removed cleanly.' },
      { title: 'Debris disposal', body: 'Materials are hauled and disposed of properly.' },
      { title: 'Prep for rebuild', body: 'The space is cleaned and prepared for drying or reconstruction.' },
    ],
    why: [
      'Precision removal that protects salvageable structure',
      'Coordinated as part of the full restoration timeline',
      'Clean, documented site handoff to the rebuild crew',
    ],
    insurance:
      'Demolition required by a covered loss is generally part of the claim. We document scope and quantities for your adjuster.',
  },
  {
    slug: 'reconstruction',
    title: 'Reconstruction',
    name: 'Reconstruction & Rebuild',
    icon: 'reconstruction',
    blurb: 'Full rebuild back to pre-loss condition — one team, start to finish.',
    intro:
      'When mitigation is done, the rebuild begins. From drywall to flooring to finish work, we restore your property to pre-loss condition with one accountable team.',
    problem:
      'After damage and demolition, your property needs to be rebuilt. Juggling separate contractors for each trade adds delay, cost, and finger-pointing.',
    process: [
      { title: 'Scope & estimate', body: 'We define the rebuild scope and provide a documented estimate.' },
      { title: 'Structural & rough-in', body: 'Framing, drywall, and systems are restored.' },
      { title: 'Finishes', body: 'Flooring, paint, trim, fixtures, and final details.' },
      { title: 'Final walkthrough', body: 'We confirm the work meets your expectations and pre-loss standard.' },
    ],
    why: [
      'One team from emergency response through final rebuild',
      'Single point of accountability — no contractor juggling',
      'Insurance-aligned estimates and documentation',
    ],
    insurance:
      'Reconstruction of covered damage is part of your claim. We align our estimate with your insurer to streamline approval.',
  },
  {
    slug: 'board-up-tarping',
    title: 'Board-Up & Tarping',
    name: 'Emergency Board-Up & Roof Tarping',
    icon: 'boardup',
    blurb: 'Secure your property fast after fire, storm, or break-in.',
    intro:
      'When your property is exposed, every hour matters. We respond 24/7 to board up openings and tarp roofs, securing the building against weather, intrusion, and further loss.',
    problem:
      'A fire, storm, or break-in can leave windows, doors, and roofs open to the elements and to trespassers, compounding the original damage.',
    process: [
      { title: 'Rapid dispatch', body: 'We respond 24/7 to secure your property quickly.' },
      { title: 'Board-up', body: 'Openings are boarded to keep out weather and intruders.' },
      { title: 'Roof tarping', body: 'Damaged roofs are tarped to prevent water intrusion.' },
      { title: 'Transition to repair', body: 'Once secured, we plan mitigation and reconstruction.' },
    ],
    why: [
      'True 24/7 emergency availability',
      'Stops secondary damage and protects against liability',
      'Seamless handoff into full restoration',
    ],
    insurance:
      'Emergency mitigation like board-up and tarping is generally covered to prevent further loss. We document it for your claim.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/**
 * FAQ seed content — drives /faq accordion + FAQPage JSON-LD.
 * TODO(client): review answers for accuracy (especially licensing, pricing,
 * and scheduling claims).
 */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What services do you offer?',
    answer:
      'Property management support, property inspections, handyman repairs, power washing, gutter cleaning and repair, yard and overgrowth cleanup, debris and waste removal (no hazardous materials), and fence and gate repair. If it keeps a property in shape, one call can usually cover it.',
  },
  {
    question: 'Do you work with landlords and property managers?',
    answer:
      'Yes — that is a core part of what we do. We handle turnovers, recurring maintenance visits, inspections, and on-call repairs across single rentals and small portfolios, with photo documentation and clean itemized invoices that are easy to pass through to owners.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Estimates are free and itemized, so you see exactly what each line of work costs before we start. For straightforward jobs (debris piles, small repairs) we can often quote from photos. TODO(client): confirm pricing language, trip-charge policy, and any bundle discounts.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. We are licensed and insured to work on residential and rental properties in Maryland. TODO(client): list license numbers here for trust and SEO.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Central Maryland, including Anne Arundel, Howard, Baltimore, Prince George’s, Montgomery, Carroll, Frederick, and Harford counties. Not sure if you’re in our area? Call us and ask.',
  },
  {
    question: 'How fast can you schedule work?',
    answer:
      'Most jobs are scheduled within days, not weeks, and urgent property issues — a failed gate, an overflowing gutter before a storm, a turnover on a deadline — get priority. Call and we will give you an honest timeline up front.',
  },
  {
    question: 'Do you haul away debris and junk?',
    answer:
      'Yes. We load and haul junk, brush, and project debris, and we leave the area broom-clean. We do not handle hazardous materials (paint, chemicals, asbestos, fuel) — but we can point you to the right county disposal resource.',
  },
];

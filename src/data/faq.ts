/**
 * FAQ seed content — drives /faq accordion + FAQPage JSON-LD.
 * TODO(client): review answers for accuracy (especially licensing, pricing,
 * and response-time claims).
 */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How fast can you respond to an emergency?',
    answer:
      'We answer calls 24/7 and dispatch crews as fast as possible — emergencies are our priority. For an active emergency, call us now rather than filling out a form, so we can get moving immediately.',
  },
  {
    question: 'Does insurance cover the damage?',
    answer:
      'Most sudden, accidental damage (burst pipes, fire, storms) is covered by homeowner and commercial policies. Coverage depends on your policy and the cause of loss. We document everything thoroughly and work directly with your insurer to streamline your claim.',
  },
  {
    question: 'How much does restoration cost?',
    answer:
      'Cost depends on the type and extent of damage. Because most jobs go through insurance, your out-of-pocket is often limited to your deductible. We provide documented estimates and bill your insurance directly. TODO(client): confirm any free-estimate / no-obligation language.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. We are licensed and insured to perform restoration and reconstruction work in Maryland. TODO(client): list license numbers and certifications (e.g. IICRC) here for trust and SEO.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Central Maryland, including Anne Arundel, Howard, Baltimore, Prince George’s, Montgomery, Carroll, Frederick, and Harford counties. Not sure if you’re in our area? Call us and ask.',
  },
  {
    question: 'What should I do first after damage occurs?',
    answer:
      'Make sure everyone is safe and, if it is safe to do so, stop the source (shut off water, leave the building in a fire). Then call us. Avoid entering areas with structural, electrical, or contamination hazards. Document damage with photos if you can — but safety and a fast call come first.',
  },
];

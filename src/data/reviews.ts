/**
 * Customer testimonials. ALL PLACEHOLDER.
 * TODO(client): replace with real, verifiable reviews (with permission).
 * Do not publish fabricated reviews — these are layout placeholders only.
 */

export interface Review {
  name: string;
  location: string;
  rating: number; // 1-5
  service: string;
  quote: string;
}

// TODO(client): replace every entry with a real review before launch.
export const reviews: Review[] = [
  {
    name: 'Placeholder Name',
    location: 'Columbia, MD',
    rating: 5,
    service: 'Power Washing',
    quote:
      'TODO: Real testimonial. The siding and stone patio look brand new. Careful around the landscaping and done in a day.',
  },
  {
    name: 'Placeholder Name',
    location: 'Annapolis, MD',
    rating: 5,
    service: 'Gutter Services',
    quote:
      'TODO: Real testimonial. Cleaned and flushed every gutter, fixed a sagging run while they were up there, and sent photos of all of it.',
  },
  {
    name: 'Placeholder Name',
    location: 'Towson, MD',
    rating: 5,
    service: 'Handyman Services',
    quote:
      'TODO: Real testimonial. Knocked out my whole punch list in one visit — gate, screen door, loose railing. On time and squared away.',
  },
  {
    name: 'Placeholder Name',
    location: 'Frederick, MD',
    rating: 5,
    service: 'Property Management Support',
    quote:
      'TODO: Real testimonial. They turned over my rental between tenants — cleanup, repairs, hauling — with one clean invoice. Made my life easy.',
  },
  {
    name: 'Placeholder Name',
    location: 'Bowie, MD',
    rating: 5,
    service: 'Yard & Overgrowth Cleanup',
    quote:
      'TODO: Real testimonial. Cleared years of overgrowth, pulled the saplings out by the roots, and hauled everything away the same day.',
  },
  {
    name: 'Placeholder Name',
    location: 'Rockville, MD',
    rating: 5,
    service: 'Property Inspections',
    quote:
      'TODO: Real testimonial. The roof and drainage report was clear, honest, and full of photos — and they fixed only what actually needed fixing.',
  },
];

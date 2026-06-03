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
    service: 'Water Damage',
    quote:
      'TODO: Real testimonial. They responded within the hour and saved our hardwood floors. Professional from start to finish.',
  },
  {
    name: 'Placeholder Name',
    location: 'Annapolis, MD',
    rating: 5,
    service: 'Fire & Smoke',
    quote:
      'TODO: Real testimonial. After the fire, they handled everything — board-up, cleanup, and the full rebuild. Made a hard time easier.',
  },
  {
    name: 'Placeholder Name',
    location: 'Towson, MD',
    rating: 5,
    service: 'Mold Remediation',
    quote:
      'TODO: Real testimonial. They found the source of the mold, fixed it, and documented everything for our insurance.',
  },
  {
    name: 'Placeholder Name',
    location: 'Frederick, MD',
    rating: 5,
    service: 'Storm Damage',
    quote:
      'TODO: Real testimonial. A tree came through the roof during a storm. They tarped it that night and rebuilt it good as new.',
  },
  {
    name: 'Placeholder Name',
    location: 'Bowie, MD',
    rating: 5,
    service: 'Sewage Cleanup',
    quote:
      'TODO: Real testimonial. Quick, discreet, and thorough with a sewage backup we could not have handled ourselves.',
  },
  {
    name: 'Placeholder Name',
    location: 'Rockville, MD',
    rating: 5,
    service: 'Reconstruction',
    quote:
      'TODO: Real testimonial. One team from the emergency call through the final walkthrough. No contractor juggling.',
  },
];

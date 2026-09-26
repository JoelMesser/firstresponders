/**
 * Single source of truth for NAP (Name / Address / Phone), navigation, and
 * business metadata. Change the phone number HERE and it updates everywhere.
 */

const PHONE_DISPLAY = '317-919-2451'; // matches the number baked into the logo art
const PHONE_E164 = '+13179192451'; // keep in sync with PHONE_DISPLAY

export const site = {
  name: 'First Response Property Solutions',
  shortName: 'First Response',
  legalName: 'First Response Property Solutions LLC', // TODO(client): confirm legal entity
  tagline: 'Property Management, Inspections & Handyman Services',
  description:
    'Veteran & first-responder owned property services in Central Maryland: property management support, inspections, handyman repairs, power washing, gutter cleaning, yard cleanup, debris removal, and fence & gate repair. Licensed & insured. Free estimates.',

  // Phone — derived from the constants above so they never drift apart.
  phone: {
    display: PHONE_DISPLAY,
    e164: PHONE_E164,
    href: `tel:${PHONE_E164}`,
  },

  email: 'help@frpsmd.com', // TODO(client): confirm this inbox exists

  // Address / NAP. TODO(client): supply real street address + geo coordinates.
  address: {
    street: '', // TODO(client): street address (or leave blank if no storefront)
    city: 'Crofton',
    region: 'MD',
    regionName: 'Maryland',
    postalCode: '21114', // TODO(client): confirm
    country: 'US',
    areaLabel: 'Central Maryland',
  },

  // Approx. coordinates for Crofton, MD (Anne Arundel County). TODO(client): refine.
  geo: {
    latitude: 39.0012,
    longitude: -76.6847,
  },

  hours: 'Open 7 days a week',

  url: 'https://frpsmd.com',

  // Trust signals shown in the utility bar / badges.
  badges: [
    'Veteran & First Responder Owned',
    'Licensed & Insured',
    'Free Estimates',
    'One Call Can Solve It All',
  ],

  social: {
    // TODO(client): real profile URLs (empty links are hidden in the footer).
    facebook: '',
    instagram: '',
    google: '',
  },
} as const;

/** Primary navigation — used by header + footer. */
export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export type SiteConfig = typeof site;

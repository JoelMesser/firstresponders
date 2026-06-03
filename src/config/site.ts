/**
 * Single source of truth for NAP (Name / Address / Phone), navigation, and
 * business metadata. Change the phone number HERE and it updates everywhere.
 *
 * TODO(client): `555-555-5555` below is a PLACEHOLDER (a fictional, non-dialable
 * number). Swap in the real local Central-Maryland number (410 / 443 / 240 / 301)
 * for trust + local SEO. This is the only place you need to edit.
 *
 * NOTE: the supplied logo image (public/logo-full.png) bakes in 317-919-2451 (an
 * Indiana area code). When the real MD number is set here, the logo image must be
 * regenerated to match so the brand art and click-to-call don't disagree.
 */

const PHONE_DISPLAY = '555-555-5555'; // TODO(client): real 410/443/240/301 number
const PHONE_E164 = '+15555555555'; // TODO(client): keep in sync with PHONE_DISPLAY

export const site = {
  name: 'First Response Property Solutions',
  shortName: 'First Response',
  legalName: 'First Response Property Solutions LLC', // TODO(client): confirm legal entity
  tagline: '24/7 Emergency Property Restoration & Repair',
  description:
    'Veteran & first-responder owned 24/7 emergency restoration in Central Maryland: water, fire & smoke, mold, storm, sewage/biohazard, demolition, and reconstruction. Licensed & insured. We work directly with your insurance.',

  // Phone — derived from the constants above so they never drift apart.
  phone: {
    display: PHONE_DISPLAY,
    e164: PHONE_E164,
    href: `tel:${PHONE_E164}`,
  },

  email: 'help@firstresponsepropertysolutions.com', // TODO(client): real inbox

  // Address / NAP. TODO(client): supply real street address + geo coordinates.
  address: {
    street: '', // TODO(client): street address (or leave blank if no storefront)
    city: 'Eldersburg',
    region: 'MD',
    regionName: 'Maryland',
    postalCode: '21784', // TODO(client): confirm
    country: 'US',
    areaLabel: 'Central Maryland',
  },

  // Approx. geo center of Central MD service area. TODO(client): refine.
  geo: {
    latitude: 39.4012,
    longitude: -76.9636,
  },

  hours: '24/7 — Open 24 hours, 7 days a week',

  url: 'https://firstresponsepropertysolutions.com', // TODO(client): production domain

  // Trust signals shown in the utility bar / badges.
  badges: [
    'Veteran & First Responder Owned',
    'Licensed & Insured',
    '24/7 Emergency Response',
    'We Bill Your Insurance Directly',
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
  { label: 'Insurance', href: '/insurance/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export type SiteConfig = typeof site;

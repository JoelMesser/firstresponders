/**
 * Counties served — drives /service-areas and /service-areas/[county].
 * TODO(client): confirm exact county list and any city-level targeting.
 */

export interface County {
  slug: string;
  name: string; // "Anne Arundel County"
  short: string; // "Anne Arundel"
  blurb: string;
  /** Representative cities/towns for local relevance. */
  cities: string[];
}

export const counties: County[] = [
  {
    slug: 'anne-arundel',
    name: 'Anne Arundel County',
    short: 'Anne Arundel',
    blurb:
      'Property management support, inspections, and handyman services across Anne Arundel County — our home base.',
    cities: ['Annapolis', 'Glen Burnie', 'Severna Park', 'Pasadena', 'Odenton'],
  },
  {
    slug: 'howard',
    name: 'Howard County',
    short: 'Howard',
    blurb: 'Power washing, gutter cleaning, repairs, and property upkeep throughout Howard County.',
    cities: ['Columbia', 'Ellicott City', 'Elkridge', 'Fulton', 'Clarksville'],
  },
  {
    slug: 'baltimore',
    name: 'Baltimore County',
    short: 'Baltimore',
    blurb: 'One reliable crew for rentals and homes across Baltimore County.',
    cities: ['Towson', 'Catonsville', 'Owings Mills', 'Dundalk', 'Pikesville'],
  },
  {
    slug: 'prince-georges',
    name: "Prince George's County",
    short: "Prince George's",
    blurb: "Inspections, maintenance, and handyman work across Prince George's County.",
    cities: ['Bowie', 'Laurel', 'College Park', 'Upper Marlboro', 'Hyattsville'],
  },
  {
    slug: 'montgomery',
    name: 'Montgomery County',
    short: 'Montgomery',
    blurb: 'Trusted property maintenance and repairs in Montgomery County.',
    cities: ['Rockville', 'Silver Spring', 'Gaithersburg', 'Bethesda', 'Germantown'],
  },
  {
    slug: 'carroll',
    name: 'Carroll County',
    short: 'Carroll',
    blurb: 'Local, dependable property services serving Carroll County.',
    cities: ['Westminster', 'Eldersburg', 'Sykesville', 'Mount Airy', 'Taneytown'],
  },
  {
    slug: 'frederick',
    name: 'Frederick County',
    short: 'Frederick',
    blurb: 'Property upkeep, cleanup, and repair throughout Frederick County.',
    cities: ['Frederick', 'Urbana', 'Mount Airy', 'Brunswick', 'Walkersville'],
  },
  {
    slug: 'harford',
    name: 'Harford County',
    short: 'Harford',
    blurb: 'Inspections, repairs, and exterior maintenance across Harford County.',
    cities: ['Bel Air', 'Aberdeen', 'Edgewood', 'Havre de Grace', 'Joppatowne'],
  },
];

export const getCounty = (slug: string) => counties.find((c) => c.slug === slug);
export const countyNames = counties.map((c) => c.name);

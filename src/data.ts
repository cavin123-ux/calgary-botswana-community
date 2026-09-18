export interface GalleryItem {
  image: string;
  alt: string;
  className: string;
  aspectClassName: string;
  imageClassName?: string;
  width: number;
  height: number;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export const EMAIL = 'calgarybotswanacommunityassoci@gmail.com';
export const TICKET_URL =
  'https://www.eventbrite.ca/e/botswana-60th-independence-diamond-jubilee-gala-tickets-1996533371058';
export const EVENTS_URL = 'https://www.eventbrite.ca/o/121611711429';
export const FACEBOOK_URL = 'https://www.facebook.com/groups/261182977292836/';

export const PROGRAMS: ProgramItem[] = [
  {
    id: '01',
    title: 'Cultural celebrations',
    description: 'Boipuso and other national days of significance.',
  },
  {
    id: '02',
    title: 'Music, dance & performance',
    description: 'Traditional and contemporary Botswana artists and performers.',
  },
  {
    id: '03',
    title: 'Stories, theatre & workshops',
    description: 'Space for dialogue, learning, and creative expression.',
  },
  {
    id: '04',
    title: 'Food & culinary experiences',
    description: 'Botswana cuisine and food traditions shared with Calgary.',
  },
  {
    id: '05',
    title: 'Community building',
    description: 'Connecting diaspora families, youth, newcomers, and friends.',
  },
  {
    id: '06',
    title: 'Partnerships',
    description: 'Working with cultural groups, artists, sponsors, and civic partners.',
  },
];

export const VALUES: ValueItem[] = [
  {
    title: 'Cultural Pride',
    description: 'Honouring and sharing Botswana’s heritage with dignity and joy.',
  },
  {
    title: 'Inclusion',
    description: 'Welcoming people of every background to experience and participate.',
  },
  {
    title: 'Community',
    description: 'Building belonging and mutual support among families and friends.',
  },
  {
    title: 'Creativity',
    description: 'Supporting artists, performers, and cultural practitioners.',
  },
  {
    title: 'Partnership',
    description: 'Collaborating for greater impact across Calgary and Alberta.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: '/assets/rethabile-afrifest-performance.jpg',
    alt: 'A Botswana cultural dancer performing on stage at AfriFest Calgary',
    className: '',
    aspectClassName: 'aspect-[4/5]',
    width: 768,
    height: 1365,
  },
  {
    image: '/assets/botswana-afrifest-mayor.jpg',
    alt: 'Calgary community representatives at the Botswana AfriFest exhibit',
    className: 'lg:col-span-2',
    aspectClassName: 'aspect-[3/2]',
    width: 1200,
    height: 800,
  },
  {
    image: '/assets/botswana-cultural-display.jpg',
    alt: 'The Calgary Botswana Community Association cultural display at AfriFest',
    className: 'md:col-span-2 lg:col-span-2',
    aspectClassName: 'aspect-[3/2]',
    imageClassName: 'object-center',
    width: 1200,
    height: 800,
  },
  {
    image: '/assets/botswana-afrifest-booth.jpg',
    alt: 'Visitors meeting at the Botswana and Zimbabwe AfriFest booths',
    className: '',
    aspectClassName: 'aspect-[3/4]',
    imageClassName: 'object-[center_20%]',
    width: 768,
    height: 1365,
  },
  {
    image: '/assets/botswana-afrifest-dance.jpg',
    alt: 'A community member dancing beside the AfriFest Calgary banner',
    className: '',
    aspectClassName: 'aspect-[3/4]',
    imageClassName: 'object-[center_25%]',
    width: 768,
    height: 1365,
  },
  {
    image: '/assets/botswana-afrifest-community.jpg',
    alt: 'A Botswana community member at Eau Claire Plaza during AfriFest',
    className: '',
    aspectClassName: 'aspect-[3/4]',
    imageClassName: 'object-[center_25%]',
    width: 768,
    height: 1365,
  },
  {
    image: '/assets/botswana-afrifest-exhibit.jpg',
    alt: 'Community members presenting Botswana crafts and culture at AfriFest',
    className: '',
    aspectClassName: 'aspect-[3/4]',
    imageClassName: 'object-[center_20%]',
    width: 768,
    height: 1365,
  },
];

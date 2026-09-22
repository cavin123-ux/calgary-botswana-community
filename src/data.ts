export interface GalleryItem {
  image: string;
  alt: string;
  className: string;
  aspectClassName: string;
  imageClassName?: string;
  width: number;
  height: number;
}

export interface VideoItem {
  id: string;
  title: string;
  caption: string;
  duration: string;
  date: string;
  tag: string;
  category: 'Anthem & Choral' | 'Traditional Songs' | 'Celebration' | 'Performance' | 'Festival';
  videoUrl: string;
  thumbnailUrl: string;
  aspectRatio?: 'portrait' | 'landscape';
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

export const MEDIA_VIDEOS: VideoItem[] = [
  {
    id: 'anthem',
    title: 'Botswana National Anthem & Choral Chants',
    caption: 'Community choir and directors performing "Fatshe leno la rona" and festive choral harmonies in national blue and black colors.',
    duration: '0:22',
    date: 'Independence Gathering',
    tag: 'National Pride',
    category: 'Anthem & Choral',
    videoUrl: '/assets/videos/video-1-anthem.mp4',
    thumbnailUrl: '/assets/thumbnails/thumb-1.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 'ululation',
    title: 'Traditional Ululations & Song of Joy',
    caption: 'Elders and community members sharing festive songs, traditional blue blankets (megagolane), and vibrant celebration chants.',
    duration: '0:22',
    date: 'Cultural Celebration',
    tag: 'Heritage Song',
    category: 'Traditional Songs',
    videoUrl: '/assets/videos/video-2-ululation.mp4',
    thumbnailUrl: '/assets/thumbnails/thumb-2.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 'footwork',
    title: 'Cultural Footwork & Youth Celebration',
    caption: 'Spirited traditional footwork and celebratory dancing with youth and elders in an energetic circle of friends.',
    duration: '0:40',
    date: 'Community Gathering',
    tag: 'Folk Rhythm',
    category: 'Performance',
    videoUrl: '/assets/videos/video-3-footwork.mp4',
    thumbnailUrl: '/assets/thumbnails/thumb-3.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 'circle-dance',
    title: 'Boipuso Community Circle Dance',
    caption: 'Dynamic rhythm, synchronized clapping, and traditional steps bringing the Calgary Botswana diaspora together.',
    duration: '1:36',
    date: 'Boipuso Celebration',
    tag: 'Unity Dance',
    category: 'Celebration',
    videoUrl: '/assets/videos/video-4-circle-dance.mp4',
    thumbnailUrl: '/assets/thumbnails/thumb-4.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 'banquet-line-dance',
    title: 'Diamond Jubilee Banquet Line Dance',
    caption: 'Community members uniting on the banquet floor in a festive sequence of steps and smiles at the celebration hall.',
    duration: '1:08',
    date: 'Diamond Jubilee Gala',
    tag: 'Gala Evening',
    category: 'Celebration',
    videoUrl: '/assets/videos/video-5-banquet-line-dance.mp4',
    thumbnailUrl: '/assets/thumbnails/thumb-5.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 'afrifest-showcase',
    title: 'AfriFest Calgary Stage Showcase',
    caption: 'The Calgary Botswana Community Association live on stage at Eau Claire Plaza, presenting Botswana culture to the city.',
    duration: '0:28',
    date: 'Eau Claire Plaza',
    tag: 'City Showcase',
    category: 'Festival',
    videoUrl: '/assets/videos/video-6-afrifest-showcase.mp4',
    thumbnailUrl: '/assets/thumbnails/thumb-6.jpg',
    aspectRatio: 'portrait',
  },
];

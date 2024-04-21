export interface MediumResponseRSS {
  status: string;
  feed: MediumFeed;
  items: MediumArticleRSS[];
}

export interface MediumFeed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface MediumArticleRSS {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: any;
  categories: string[];
}

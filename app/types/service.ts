interface ListItem {
    description: string[];
    title: string;
    _key: string;
  }
  
  interface Section {
    list: ListItem[];
    title: string;
    _key: string;
  }
  
  interface Card {
    body: Section[];
    collabDescription: string;
    collabTitle: string;
    title: string;
    id: string;
    image: any;
    introDescription: string;
    introTitle: string;
    subtitle: string;
  }
  
  export interface Services {
    date_created: string;
    hero_subtitle: string;
    hero_title: string;
    hero_badge: string;
    section1_cards: Card[];
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  }
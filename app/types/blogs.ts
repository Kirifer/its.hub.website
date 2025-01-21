export interface Blogs {
  date_created: string;
  hero_title: string;
  hero_subtitle: string;
  section1_cards: Section1Card[];
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface Section1Card {
  button?: string;
  title: string;
  icon: any;
  body: [
    {
      title: string;
      description: string;
    }
  ];
  conclusionTitle: string;
  conclusionDescription: string;
  introduction_title: string;
  introduction_description: string;
  id?: string;
  tags: string[];
  subtitle: string;
  _createdAt: string;
  _updatedAt: string;
  _type?: string;
  _id?: string;
  _rev?: string;
}

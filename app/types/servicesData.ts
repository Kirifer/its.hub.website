interface ListItem {
  description: string;
  title: string;
  _key: string;
}

interface Section {
  description?: string;
  list: ListItem[];
  title: string;
  _key: string;
}

export interface ServicesData {
  body: Section[];
  collabDescription: string;
  collabTitle: string;
  title: string;
  icon: any;
  id: string;
  introduction_description: string;
  introduction_title: string;
  image: any;
  subtitle: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
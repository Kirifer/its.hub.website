interface ListItem {
  description: string;
  title: string;
  image_1: any;
  image_2: any;
  _key: string;
}

interface Section {
  description?: []; 
  list: ListItem[];
  title: string;
  _key: string;
}

export interface BlogData {
  body: Section[];
  conclusion_description: string;
  conclusion_title: string;
  title: string;
  icon: any;
  id: string;
  introduction_description: string;
  introduction_title: string;
  subtitle: string;
  tags: string[];
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
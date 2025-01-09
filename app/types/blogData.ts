interface sections {
  description: string;
  miniTitle: string;
  _key: string;
}
export interface BlogData {
  bodyTitle:{
    sections: sections[];
  }
  conclusionDescription: string;
  conclusionTitle: string;
  heading: string;
  icon: any
  id: string;
  introDescription: string;
  introTitle: string;
  subheading: string;
  tags: string[];
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface Footer {
  logo: any;
  images: any[];
  subheading: string;
  contactInfo: {
    email: string;
    phone1: string;
    phone2: string;
    phone3: string;
    address1: string;
    address2: string;
    address3: string;
    facebook: string;
    linkedin: string;
    twitter: string;
    country1: string; // Add this line
  };
  services: {
    _ref: string;
    _type: string;
  }[];
  otherServices: string;
  date_created: string;
  link: string;
  link_name: string;
}
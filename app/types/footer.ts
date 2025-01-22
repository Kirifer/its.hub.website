export interface Footer {
  title: string;
  subtitle: string;
  logo: any;
  images: any[];
  contact_info: {
    email: string;
    phone_1: string;
    phone_2: string;
    phone_3: string;
    address_1: string;
    address_2: string;
    address_3: string;
    facebook: string;
    linkedin: string;
    twitter: string;
    country_1: string;
    country_2: string;
    country_3: string;
  };
  services: {
    _ref: string;
    _type: string;
  }[];
  other_services: {  
    name: string;
    link: string;
  }[];
  date_created: string;
  link: string;
  link_name: string;
}
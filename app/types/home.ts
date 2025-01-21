export interface Home {
  _id: string;
  hero_title: string;
  hero_subtitle: string;
  hero_badge: string;
  hero_button: string;
  hero_button_2: string;
  hero_image: any;
  section_1: Array<{
    title: string;
    subtitle: string; 
    _key: string;
    icon: { asset: { _ref: string } };
  }>;
  section_1_button: string;
  section_2_badge: string;
  section_2_badge_2: string;
  section_2_button: string;
  section_2_cards: Array<{
    Title: string;
    Subtitle: string; 
    _key: string;
    icon: { asset: { _ref: string } };
  }>;
  section_2_footer_button: string;
  section_2_footer_title: string; 
  section_2_footer_subtitle: string; 
  section_2_title: string;
  section_2_stats: Array<{ title: string; subtitle: string }>; 
  section_2_subtitle: string; 
  section_3_image: { asset: { _ref: string } };
  section_3_cards: Array<{ title: string; subtitle: string; _key: string }>; 
  section_4: Array<{ title: string; subtitle: string; _key: string }>; 
  section_5_badge: string;
  section_5_button: string;
  section_5_title: string;
  section_5_subtitle: string;
  section_5_images: Array<{ asset: { _ref: string } }>;
  section_6_testimonials: Array<{
    author: string;
    position: string;
    message: string;
    _key: string;
  }>;
  section_7_button_1: string;
  section_7_button_2: string;
  section_7_image: { asset: { _ref: string } };
  section_7_subtitle: string[];
  section_7_title: string;
  _createdAt: string;
  _updatedAt: string;
}
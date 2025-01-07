export interface Home {
    _id: string;
    hero_title: string;
    hero_subtitle: string;
    hero_badge: string;
    hero_button: string;
    hero_button_2: string;
    hero_image: any;
    section_1: Array<{
      heading: string;
      subheading: string;
      _key: string;
      icon: { asset: { _ref: string } };
    }>;
    section_1_button: string;
    section_2_badge: string;
    section_2_badge_2: string;
    section_2_button: string;
    section_2_cards: Array<{
      heading: string;
      subheading: string;
      _key: string;
      icon: { asset: { _ref: string } };
    }>;
    section_2_footer_button: string;
    section_2_footer_heading: string;
    section_2_footer_subheading: string;
    section_2_heading: string;
    section_2_stats: Array<{ heading: string; subheading: string }>;
    section_2_subheading: string;
    section_3_image: { asset: { _ref: string } };
    section_3_cards: Array<{ heading: string; subheading: string; _key: string }>;
    section_4: Array<{ heading: string; subheading: string; _key: string }>;
    section_5_badge: string;
    section_5_button: string;
    section_5_heading: string;
    section_5_subheading: string;
    section_6_testimonials: Array<{
      author: string;
      position: string;
      message: string;
      _key: string;
    }>;
    section_5_images: Array<{ asset: { _ref: string } }>;
    section_7_button_1: string;
    section_7_button_2: string;
    section_7_heading: string;
    section_7_subheadings: Array<string>;
    section_7_image: { asset: { _ref: string } };
  }
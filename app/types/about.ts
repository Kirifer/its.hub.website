export interface About {
  hero_title: string;
  hero_subtitle: string;
  section_1: {
    heading: string;
    subheading: string;
    section_button1: string;
    image: { asset: { _ref: string } };
  }[];
  section_2_stats: Array<{ heading: string; subheading: string }>;
  section_2_text: string;
  section_3_heading: string;
  section_3_button: string;
  section_3_cards: {
    heading: string;
    subheading: string;
    image: { asset: { _ref: string } };
  }[];
  section_4_heading: string;
  section_4_cards: {
    heading: string;
    subheading: string;
    image: { asset: { _ref: string } };
  }[];
  section_5_testimonials: {
    message: string;
    author: string;
    position: string;
  }[];
  section_6_heading: string;
  section_6_subheading: string;
  section_6_button: string;
}

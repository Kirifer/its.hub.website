export interface About {
  hero_badge: string;
  hero_title: string;
  hero_subtitle: string;
  section_1: {
    title: string;
    subtitle: string;
    section_button1: string;
    image: { asset: { _ref: string } };
  }[];
  section_2_stats: Array<{ title: string; subtitle: string }>;
  section_2_text: string;
  section_3_title: string;
  section_3_button: string;
  section_3_cards: {
    title: string;
    subtitle: string;
    image: { asset: { _ref: string } };
  }[];
  section_4_title: string;
  section_4_cards: {
    title: string;
    subtitle: string;
    image: { asset: { _ref: string } };
  }[];
  section_5_testimonials: {
    message: string;
    author: string;
    position: string;
    stars: number;
  }[];
  section_6_title: string;
  section_6_subtitle: string;
  section_6_button: string;
}

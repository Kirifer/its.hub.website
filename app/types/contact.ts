export interface LocationCard {
    card_subtitle: string;
    card_title: string;
    _key: string;
}

export interface SectionStep {
    step_no: number;
    step_subtitle: string;
    step_title: string;
    _key: string;
}

export interface Contact {
    card1_title: string;
    date_created: string;
    hero_badge: string;
    hero_subtitle: string;
    hero_title: string;
    location_cards: LocationCard[];
    section2_steps: SectionStep[];
    section2_subtitle: string;
    section2_title: string;
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}
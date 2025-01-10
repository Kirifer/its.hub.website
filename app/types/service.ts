
interface Card {
    bodyTitle: [
        {
            desription: string;
            miniTitle: string;
        }
    ];
    collabDescription: string;
    collabTitle: string;
    heading: string;
    id: string;
    image: any;
    introDescription: string;
    introTitle: string;
    subheading: string;
}

export interface Services {
    date_created: string;
    hero_subtitle: string;
    hero_title: string;
    section1_cards: Card[];
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}
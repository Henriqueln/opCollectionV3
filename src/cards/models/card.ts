export interface Card {
    _id?: string;
    set: string;
    rarity: CardRarity;
    category: CardCategory;
    color: CardColor;
    color2: CardColor;
    code: string;
    name: string;
    playset: number;
    source: string;
    type1: string;
    type2: string;
    type3: string;
    quantity: number;
    quantityAux?: number;
}

export enum CardRarity {
    Common = 'C',
    Uncommon = 'UC',
    Rare = 'R',
    SuperRare = 'SR',
    Secret = 'SEC',
    Leader = 'Leader',
    Alternate = 'ALT'
}

export enum CardCategory {
    Character = 'Character',
    Event = 'Event',
    Leader = 'Leader',
    DON = 'DON',
    Stage = 'Stage'
}

export enum CardColor {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
    Purple = 'Purple',
    Black = 'Black',
    Yellow = 'Yellow'
}
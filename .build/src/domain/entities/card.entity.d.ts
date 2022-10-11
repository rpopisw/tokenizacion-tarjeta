export declare class Card {
    id?: string;
    email: string;
    card_number: string;
    cvv: string;
    expiration_year: string;
    expiration_month: string;
    pk: string;
    tokken?: string;
    createdAt?: Date;
    constructor(email: string, card_number: string, cvv: string, expiration_year: string, expiration_month: string, tokken: string, pk: string);
}

export class Card{
    id?: string;
    email: string;
    card_number: string;
    cvv: string;
    expiration_year: string;
    expiration_month: string;
    pk: string;
    tokken?: string;
    createdAt?: Date;

    constructor(email: string, card_number: string, cvv: string, expiration_year: string, expiration_month: string, tokken: string, pk: string){
        this.email = email;
        this.card_number = card_number;
        this.cvv = cvv;
        this.expiration_year = expiration_year;
        this.expiration_month = expiration_month;
        this.tokken = tokken;
        this.pk = pk;
    }
}
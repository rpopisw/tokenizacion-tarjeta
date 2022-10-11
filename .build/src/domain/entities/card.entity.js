"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(email, card_number, cvv, expiration_year, expiration_month, tokken, pk) {
        this.email = email;
        this.card_number = card_number;
        this.cvv = cvv;
        this.expiration_year = expiration_year;
        this.expiration_month = expiration_month;
        this.tokken = tokken;
        this.pk = pk;
    }
}
exports.Card = Card;
//# sourceMappingURL=card.entity.js.map
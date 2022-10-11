"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCardByTokkenUseCase = void 0;
require('dotenv').config();
class GetCardByTokkenUseCase {
    constructor(cardRepository, commerceService) {
        this.cardRepository = cardRepository;
        this.commerceService = commerceService;
    }
    async execute(tokken, pk) {
        const commerceService = await this.commerceService.getCommerceByPk(pk);
        if (!commerceService) {
            return { msg: "Commerce not found" };
        }
        const card = await this.cardRepository.getCardByToken(tokken, pk);
        if (!card) {
            return { msg: "Card not found" };
        }
        return {
            card_number: card.card_number,
            expiration_year: card.expiration_year,
            expiration_month: card.expiration_month,
        };
    }
}
exports.GetCardByTokkenUseCase = GetCardByTokkenUseCase;
//# sourceMappingURL=get-card-by-tokken.js.map
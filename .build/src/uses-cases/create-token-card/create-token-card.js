"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTokenCardUseCase = void 0;
class CreateTokenCardUseCase {
    constructor(cardRepository, commerceService) {
        this.cardRepository = cardRepository;
        this.commerceService = commerceService;
    }
    async execute(card, pk) {
        card.pk = pk;
        card.tokken = this.generateTokkenUnique();
        await this.cardRepository.saveCard(card);
        const commerce = await this.commerceService.getCommerceByPk(pk);
        if (!commerce) {
            return { msg: "Commerce not found" };
        }
        return {
            msg: "Card saved",
            tokken: card.tokken
        };
    }
    generateTokkenUnique() {
        const random = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
        const tokken = random.substring(0, 16);
        return tokken;
    }
}
exports.CreateTokenCardUseCase = CreateTokenCardUseCase;
//# sourceMappingURL=create-token-card.js.map
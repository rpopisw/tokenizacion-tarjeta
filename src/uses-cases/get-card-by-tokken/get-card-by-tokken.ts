require('dotenv').config()
import { ICommerceService } from "../../domain/adapters/commerce-service.interface";
import { CardRepository } from "../../domain/repositories/card.repository.interface";

export class GetCardByTokkenUseCase{
    constructor(
        private cardRepository: CardRepository,
        private commerceService: ICommerceService
    ) {}
    async execute(tokken: string,pk:string): Promise<{
        card_number: string,
        expiration_month: string,
        expiration_year: string,
    }|{msg:string}> {
        const commerceService = await this.commerceService.getCommerceByPk(pk);
        if (!commerceService) {
            return {msg:"Commerce not found"}
        }
        const card = await this.cardRepository.getCardByToken(tokken,pk);
        if (!card) {
            return {msg:"Card not found"}
        }
        return {
            card_number: card.card_number,
            expiration_year: card.expiration_year,
            expiration_month: card.expiration_month,
        };
    }
}
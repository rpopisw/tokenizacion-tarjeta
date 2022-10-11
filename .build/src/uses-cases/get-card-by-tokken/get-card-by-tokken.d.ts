import { ICommerceService } from "../../domain/adapters/commerce-service.interface";
import { CardRepository } from "../../domain/repositories/card.repository.interface";
export declare class GetCardByTokkenUseCase {
    private cardRepository;
    private commerceService;
    constructor(cardRepository: CardRepository, commerceService: ICommerceService);
    execute(tokken: string, pk: string): Promise<{
        card_number: string;
        expiration_month: string;
        expiration_year: string;
    } | {
        msg: string;
    }>;
}

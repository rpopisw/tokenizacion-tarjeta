import { ICommerceService } from "../../domain/adapters/commerce-service.interface";
import { Card } from "../../domain/entities/card.entity";
import { CardRepository } from "../../domain/repositories/card.repository.interface";
export declare class CreateTokenCardUseCase {
    private readonly cardRepository;
    private readonly commerceService;
    constructor(cardRepository: CardRepository, commerceService: ICommerceService);
    execute(card: Card, pk: string): Promise<{
        msg: string;
        tokken: string;
    } | {
        msg: string;
    }>;
    generateTokkenUnique(): string;
}

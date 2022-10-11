import { Card } from "../../../../domain/entities/card.entity";
import { CardRepository } from "../../../../domain/repositories/card.repository.interface";
export declare class CardRepositoryTo implements CardRepository {
    private mongoDataSource;
    constructor(mongoDataSource: string);
    saveCard(card: Card): Promise<Card>;
    getCardByToken(token: string, pk: string): Promise<Card | null>;
}

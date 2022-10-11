import { Card } from "domain/entities/card.entity";
export declare abstract class CardRepository {
    abstract saveCard(card: Card): Promise<Card>;
    abstract getCardByToken(token: string, pk: string): Promise<Card | null>;
}

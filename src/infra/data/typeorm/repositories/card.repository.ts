import { CardModel } from "../../../commons/models-mongo/card.model";
import { Card } from "../../../../domain/entities/card.entity";
import { CardRepository } from "../../../../domain/repositories/card.repository.interface";
import { myMongoDB } from "../../../commons/data-sources/mongodb.datasource";
import { connect } from "mongoose";

export class CardRepositoryTo implements CardRepository {
    constructor(private mongoDataSource: string) {
        this.mongoDataSource = myMongoDB
    }
    async saveCard(card: Card): Promise<Card> {
        await connect(this.mongoDataSource);
        const cardSaved = new CardModel({
            email: card.email,
            card_number: card.card_number,
            cvv: card.cvv,
            expiration_year: card.expiration_year,
            expiration_month: card.expiration_month,
            pk: card.pk,
            tokken: card.tokken
        });
        await cardSaved.save();
        return {} as Card;
        }
   async getCardByToken(token: string, pk:string): Promise<Card | null> {
        await connect(this.mongoDataSource);
        const card = await CardModel.findOne({tokken: token, pk: pk});
        return card;
    }     
}
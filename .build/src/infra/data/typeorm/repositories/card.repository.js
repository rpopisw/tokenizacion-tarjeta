"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRepositoryTo = void 0;
const card_model_1 = require("../../../commons/models-mongo/card.model");
const mongodb_datasource_1 = require("../../../commons/data-sources/mongodb.datasource");
const mongoose_1 = require("mongoose");
class CardRepositoryTo {
    constructor(mongoDataSource) {
        this.mongoDataSource = mongoDataSource;
        this.mongoDataSource = mongodb_datasource_1.myMongoDB;
    }
    async saveCard(card) {
        await (0, mongoose_1.connect)(this.mongoDataSource);
        const cardSaved = new card_model_1.CardModel({
            email: card.email,
            card_number: card.card_number,
            cvv: card.cvv,
            expiration_year: card.expiration_year,
            expiration_month: card.expiration_month,
            pk: card.pk,
            tokken: card.tokken
        });
        await cardSaved.save();
        return {};
    }
    async getCardByToken(token, pk) {
        await (0, mongoose_1.connect)(this.mongoDataSource);
        const card = await card_model_1.CardModel.findOne({ tokken: token, pk: pk });
        return card;
    }
}
exports.CardRepositoryTo = CardRepositoryTo;
//# sourceMappingURL=card.repository.js.map
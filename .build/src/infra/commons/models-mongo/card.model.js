"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardModel = void 0;
const mongoose_1 = require("mongoose");
const cardSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    card_number: { type: String, required: true },
    cvv: { type: String, required: true },
    expiration_year: { type: String, required: true },
    expiration_month: { type: String, required: true },
    pk: { type: String, required: true },
    tokken: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
});
cardSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 * 1 });
exports.CardModel = (0, mongoose_1.model)('Card', cardSchema);
//# sourceMappingURL=card.model.js.map
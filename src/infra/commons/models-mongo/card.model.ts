import { Schema, model } from "mongoose";

interface ICard {
    email: string;
    card_number: string;
    cvv: string;
    expiration_year: string;
    expiration_month: string;
    pk: string;
    tokken: string;
    createdAt: Date;
  }

  const cardSchema = new Schema<ICard>({
    email: { type: String, required: true },
    card_number: { type: String, required: true },
    cvv: { type: String, required: true },
    expiration_year: { type: String, required: true },
    expiration_month: { type: String, required: true },
    pk: { type: String, required: true },
    tokken: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
  });  

  cardSchema.index(
    { createdAt: 1 },
    { expireAfterSeconds: 60 * 1 }
  )

 export const CardModel = model<ICard>('Card', cardSchema);

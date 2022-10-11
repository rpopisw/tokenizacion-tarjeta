require('dotenv').config()
import axios from "axios";
import { ICommerceService } from "../../domain/adapters/commerce-service.interface";
import { Commerce } from "../../domain/entities/commerce.entity";

export class CommerceService implements ICommerceService {
    async getCommerceByPk(pk: string): Promise<Commerce> {
        const url = process.env.URL_API_COMMERCE;
        const commerce = await axios.post(url!, {pk: pk});
        return commerce.data.data;
    }
}
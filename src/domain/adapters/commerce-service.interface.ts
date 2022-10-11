import { Commerce } from "../entities/commerce.entity";

export abstract class ICommerceService {
    abstract getCommerceByPk(pk:string): Promise<Commerce>;
}
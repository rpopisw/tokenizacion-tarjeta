import { Commerce } from "../entities/commerce.entity";
export declare abstract class ICommerceService {
    abstract getCommerceByPk(pk: string): Promise<Commerce>;
}

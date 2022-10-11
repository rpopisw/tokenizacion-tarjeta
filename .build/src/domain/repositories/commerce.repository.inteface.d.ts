import { Commerce } from "../../domain/entities/commerce.entity";
export declare abstract class CommerceRepository {
    abstract getCommerceByPk(pk: string): Promise<Commerce | null>;
}

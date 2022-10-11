import { ICommerceService } from "../../domain/adapters/commerce-service.interface";
import { Commerce } from "../../domain/entities/commerce.entity";
export declare class CommerceService implements ICommerceService {
    getCommerceByPk(pk: string): Promise<Commerce>;
}

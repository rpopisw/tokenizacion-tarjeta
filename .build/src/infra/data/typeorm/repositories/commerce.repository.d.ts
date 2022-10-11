import { Commerce } from "../../../../domain/entities/commerce.entity";
import { CommerceRepository } from "../../../../domain/repositories/commerce.repository.inteface";
import { DataSource } from "typeorm";
export declare class CommerceRepositoryTO implements CommerceRepository {
    dataSource: DataSource;
    constructor(dataSource: DataSource);
    getCommerceByPk(pk: string): Promise<Commerce | null>;
}

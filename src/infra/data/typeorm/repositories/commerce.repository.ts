import { Commerce } from "../../../../domain/entities/commerce.entity";
import { CommerceRepository } from "../../../../domain/repositories/commerce.repository.inteface";
import { mysqlDataSource } from "../../../../infra/commons/data-sources/mysql2.datasource";
import { DataSource } from "typeorm";

export class CommerceRepositoryTO implements CommerceRepository {
    constructor(
       public dataSource: DataSource
    ) {
        this.dataSource = mysqlDataSource;
    }
    
    async getCommerceByPk(pk: string): Promise<Commerce | null> {
        await mysqlDataSource.initialize()
        const commerce = await this.dataSource.getRepository(Commerce).findOneBy({pkDevelop: pk});
        return commerce;
    }

}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommerceRepositoryTO = void 0;
const commerce_entity_1 = require("../../../../domain/entities/commerce.entity");
const mysql2_datasource_1 = require("../../../../infra/commons/data-sources/mysql2.datasource");
class CommerceRepositoryTO {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.dataSource = mysql2_datasource_1.mysqlDataSource;
    }
    async getCommerceByPk(pk) {
        await mysql2_datasource_1.mysqlDataSource.initialize();
        const commerce = await this.dataSource.getRepository(commerce_entity_1.Commerce).findOneBy({ pkDevelop: pk });
        return commerce;
    }
}
exports.CommerceRepositoryTO = CommerceRepositoryTO;
//# sourceMappingURL=commerce.repository.js.map
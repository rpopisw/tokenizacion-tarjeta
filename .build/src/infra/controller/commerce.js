"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCommerceByPK = void 0;
const commerce_repository_1 = require("../data/typeorm/repositories/commerce.repository");
const get_commerce_by_pk_1 = require("../../uses-cases/get-commerce-by-pk/get-commerce-by-pk");
const typeorm_mysql_config_1 = require("../data/typeorm/typeorm.mysql.config");
const validateCommerceByPK = async (event) => {
    const getCommerceByPkUsecase = new get_commerce_by_pk_1.GetCommerceByPKUseCase(new commerce_repository_1.CommerceRepositoryTO(typeorm_mysql_config_1.mysqlDataSource));
    const body = JSON.parse(event.body);
    const commerce = await getCommerceByPkUsecase.execute(body.pk);
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify({
            message: 'Commerce by PK',
            data: commerce,
        }, null, 2),
    };
};
exports.validateCommerceByPK = validateCommerceByPK;
//# sourceMappingURL=commerce.js.map
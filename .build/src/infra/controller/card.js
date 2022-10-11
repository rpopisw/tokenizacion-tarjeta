"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardByTokken = exports.createTokenCard = void 0;
const mongodb_datasource_1 = require("../../infra/commons/data-sources/mongodb.datasource");
const create_token_card_1 = require("../../uses-cases/create-token-card/create-token-card");
const card_repository_1 = require("../../infra/data/typeorm/repositories/card.repository");
const header_validation_1 = require("../../infra/commons/validations/header.validation");
const body_validation_1 = require("../../infra/commons/validations/body.validation");
const commerce_service_1 = require("../../infra/services/commerce-service");
const get_card_by_tokken_1 = require("../../uses-cases/get-card-by-tokken/get-card-by-tokken");
const createTokenCard = async (event) => {
    const errors = [];
    const body = JSON.parse(event.body);
    errors.push(...(0, header_validation_1.validateHeader)(event.headers));
    errors.push(...(0, body_validation_1.validateBody)(body));
    if (errors.length > 0) {
        return {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 400,
            body: JSON.stringify({
                message: 'Bad Request',
                errors: errors,
            }, null, 2),
        };
    }
    const createTokenCardUseCase = new create_token_card_1.CreateTokenCardUseCase(new card_repository_1.CardRepositoryTo(mongodb_datasource_1.myMongoDB), new commerce_service_1.CommerceService());
    const msg = await createTokenCardUseCase.execute(body, event.headers.pk);
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify({
            msg
        }),
    };
};
exports.createTokenCard = createTokenCard;
const getCardByTokken = async (event) => {
    const errors = [];
    const body = JSON.parse(event.body);
    errors.push(...(0, header_validation_1.validateHeader)(event.headers));
    if (errors.length > 0) {
        return {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 400,
            body: JSON.stringify({
                message: 'Bad Request',
                errors: errors,
            }, null, 2),
        };
    }
    const getCardByTokenUseCase = new get_card_by_tokken_1.GetCardByTokkenUseCase(new card_repository_1.CardRepositoryTo(mongodb_datasource_1.myMongoDB), new commerce_service_1.CommerceService());
    const card = await getCardByTokenUseCase.execute(body.tokken, event.headers.pk);
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify({
            card
        }),
    };
};
exports.getCardByTokken = getCardByTokken;
//# sourceMappingURL=card.js.map
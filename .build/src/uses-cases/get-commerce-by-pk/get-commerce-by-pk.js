"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCommerceByPKUseCase = void 0;
class GetCommerceByPKUseCase {
    constructor(commerceRepository) {
        this.commerceRepository = commerceRepository;
    }
    async execute(pk) {
        const commerce = await this.commerceRepository.getCommerceByPk(pk);
        return commerce;
    }
}
exports.GetCommerceByPKUseCase = GetCommerceByPKUseCase;
//# sourceMappingURL=get-commerce-by-pk.js.map
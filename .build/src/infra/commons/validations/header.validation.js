"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHeader = void 0;
const validateHeader = (header) => {
    let errors = [];
    const pk = header.pk;
    if (!pk) {
        errors.push('pk is required');
    }
    if (pk) {
        let [first, second, third] = pk.split('_');
        if (first !== 'pk') {
            errors.push('pk is not valid');
        }
        if (!['dev', 'prod', 'test'].includes(second)) {
            errors.push('enviromment is not valid in pk');
        }
        if (third.length !== 16) {
            errors.push('pk length is not valid');
        }
    }
    return errors;
};
exports.validateHeader = validateHeader;
//# sourceMappingURL=header.validation.js.map
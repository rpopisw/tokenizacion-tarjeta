"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const validateBody = (body) => {
    const errors = [];
    if (!body.email) {
        errors.push('Email is required');
    }
    if (body.email) {
        if (!body.email.includes('@')) {
            errors.push('Email is not valid');
        }
        const [first, second] = body.email.split('@');
        if (!['gmail.com', 'hotmail.com', 'yahoo.coms'].includes(second)) {
            errors.push('Email is not valid');
        }
    }
    if (!body.card_number) {
        errors.push('Card number is required');
    }
    if (body.card_number) {
        console.log(body.card_number.length);
        if (body.card_number.length > 16 || body.card_number.length < 13) {
            errors.push('Card number is not valid');
        }
        if (!algorithLuhn(body.card_number)) {
            errors.push('Card number is not valid');
        }
    }
    if (!body.cvv) {
        errors.push('CVV is required');
    }
    if (body.cvv) {
        if (body.cvv.length !== 3 && body.cvv.length !== 4) {
            errors.push('CVV is not valid');
        }
    }
    if (!body.expiration_year) {
        errors.push('Expiration year is required');
    }
    if (body.expiration_year) {
        if (body.expiration_year.length !== 4) {
            errors.push('Expiration year is not valid');
        }
        if (!validateYearLessFiveYears(body.expiration_year)) {
            errors.push('Expiration year is not valid');
        }
    }
    if (!body.expiration_month) {
        errors.push('Expiration month is required');
    }
    if (body.expiration_month) {
        if (!validateMonth(body.expiration_month)) {
            errors.push('Expiration month is not valid');
        }
    }
    return errors;
};
exports.validateBody = validateBody;
const algorithLuhn = (cardNumber) => {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));
        if (shouldDouble) {
            if ((digit *= 2) > 9)
                digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
};
const validateMonth = (month) => {
    if (month.length !== 2) {
        return false;
    }
    if (month > '12') {
        return false;
    }
    return true;
};
const validateYearLessFiveYears = (year) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const yearLessFiveYears = currentYear + 5;
    if (year > yearLessFiveYears.toString()) {
        return false;
    }
    if (year < currentYear.toString()) {
        return false;
    }
    return true;
};
//# sourceMappingURL=body.validation.js.map
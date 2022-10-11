"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commerce = void 0;
const typeorm_1 = require("typeorm");
let Commerce = class Commerce {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Commerce.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "pk_develop" }),
    __metadata("design:type", String)
], Commerce.prototype, "pkDevelop", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "pk_test" }),
    __metadata("design:type", String)
], Commerce.prototype, "pkTest", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "pk_production" }),
    __metadata("design:type", String)
], Commerce.prototype, "pkProduction", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "name" }),
    __metadata("design:type", String)
], Commerce.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "description" }),
    __metadata("design:type", String)
], Commerce.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", String)
], Commerce.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Commerce.prototype, "updatedAt", void 0);
Commerce = __decorate([
    (0, typeorm_1.Entity)()
], Commerce);
exports.Commerce = Commerce;
//# sourceMappingURL=commerce.entity.js.map
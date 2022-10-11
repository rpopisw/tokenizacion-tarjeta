"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myMongoDB = void 0;
require('dotenv').config();
exports.myMongoDB = `mongodb://${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/${process.env.DB_MONGO_NAME}`;
//# sourceMappingURL=mongodb.datasource.js.map
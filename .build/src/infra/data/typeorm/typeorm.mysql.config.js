"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlDataSource = void 0;
require('dotenv').config();
const typeorm_1 = require("typeorm");
exports.mysqlDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_MYSQL_HOST,
    port: parseInt(process.env.DB_MYSQL_PORT),
    username: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_NAME,
    entities: [
        "src/domain/entities/*.entity{.ts,.js}"
    ],
    migrations: [
        "src/infra/data/typeorm/migrations/*.ts"
    ],
    migrationsRun: true,
    synchronize: true,
    logging: true
});
//# sourceMappingURL=typeorm.mysql.config.js.map
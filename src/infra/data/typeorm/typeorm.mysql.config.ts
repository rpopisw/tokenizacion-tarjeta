require('dotenv').config()
import { DataSource } from "typeorm";

export const mysqlDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_MYSQL_HOST,
    port: parseInt(process.env.DB_MYSQL_PORT as string),
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
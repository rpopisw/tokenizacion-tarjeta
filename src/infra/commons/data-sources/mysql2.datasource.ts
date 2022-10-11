require('dotenv').config()
import { Commerce } from "../../../domain/entities/commerce.entity";
import { DataSource } from "typeorm";

export const mysqlDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_MYSQL_HOST,
    port: parseInt(process.env.DB_MYSQL_PORT as string),
    username: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_NAME,
    entities: [
       Commerce
    ],
    synchronize: true,
    logging: true
});
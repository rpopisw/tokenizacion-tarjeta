require('dotenv').config()
export const myMongoDB =`mongodb://${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/${process.env.DB_MONGO_NAME}`;

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export default new Sequelize({
    dialect: process.env.DB_TYPE,
    storage: process.env.DB_STORAGE,
    logging: process.env.DB_LOGGING === 'true',
});
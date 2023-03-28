import dotenv from 'dotenv';
dotenv.config();
export default {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,
    API_URL: process.env.API_URL || '/api/v1',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb://llanos:18401145@localhost:27017/?authMechanism=DEFAULT&authSource=db_eeducation',
    DATABASE: process.env.DATABASE || 'db_education', 
    DB_USER: process.env.DB_PASSWORD || '18401145', 
    DB_PASSWORD: process.env.DB_USER || 'llanos',
};
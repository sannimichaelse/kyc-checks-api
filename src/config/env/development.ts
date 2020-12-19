import * as dotenv from 'dotenv';

dotenv.config();

const development = {
    PORT: process.env.PORT,
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL
};

export default development;

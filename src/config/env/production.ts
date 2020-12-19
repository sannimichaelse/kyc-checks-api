import * as dotenv from 'dotenv';

dotenv.config();

const production = {
  PORT: process.env.PORT
};

export default production;

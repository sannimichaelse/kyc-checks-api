import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import { Application } from 'express';
import config from './src/config/index';
import Server from './src/index';

const app: Application = express();
const server: Server = new Server(app);
const PORT = config.PORT || 3002;

const API_URL: string = config.API_URL;
const API_KEY_URL: string = config.API_KEY;

if (!API_KEY_URL || !API_KEY_URL) {
  console.log('Please create .env file, refer .env.sample');
  process.exit(0);
}


app.listen(PORT, () => {
  console.log('ok, server is running');
});
console.info(`Server running on : http://localhost:${PORT}`);

export default app;

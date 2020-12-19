import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import { Application } from 'express';
import config from './src/config/index';
import Server from './src/index';

const app: Application = express();
const server: Server = new Server(app);
const PORT = config.PORT || 3002;

app.listen(PORT, () => {
  console.log('ok, server is running');
});
console.info(`Server running on : http://localhost:${PORT}`);

export default app;

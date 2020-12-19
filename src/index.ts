import { Application,Router } from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as fs from "fs";
import { WriteStream } from "fs";
import * as path from "path";
import * as helmet from "helmet";
import * as winston from "winston";
import * as cors from "cors"

import Routes from "./routes";

// app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    // const accessLogStream: WriteStream = fs.createWriteStream(
    //   path.join(__dirname, "./logs/access.log"),
    //   { flags: "a" }
    // );

    app.get("/", (req, res) =>
      res.status(200).json({
          message: 'Welcome to KYC Checks API',
          code: 200,
          status: 'success'
      })
    );
    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      // Request methods you wish to allow
      res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");
      // Request headers you wish to allow
      res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type"
      );
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader("Access-Control-Allow-Credentials", "true");
      next();
    });

    app.use(cors());
    //app.use(morgan("combined", { stream: accessLogStream }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(helmet());
  }
}

process.on("beforeExit", function (err) {
  winston.error(JSON.stringify(err));
  console.error(err);
});

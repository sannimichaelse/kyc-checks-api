import { Application, Router } from "express";
export default class Routes {

  constructor(app: Application) {
    app.get("/api/v1", (req, res) =>
      res
        .status(200)
        .json({
          message: 'Welcome to KYC Checks API Version 1',
          code: 200,
          status: 'success'
        })
    );

  }
}

import { NextFunction, Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import ApiResponses from '../handlers/handles.api.responses';


class KycController {

  constructor() {
  }

  performKycChecks(req: Request, res: Response, next: NextFunction) {
    return res.status(HttpStatus.OK).json(ApiResponses.success({}, 'TESTING', HttpStatus.OK));
  }
}

export default new KycController();
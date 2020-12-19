import { NextFunction, Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { logger } from '../config/logger';
import ApiResponses from '../handlers/handles.api.responses';
import KycService from '../services/services.kyc';


class KycController {

  constructor() {
  }

  public async performKycChecks(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await KycService.initiateKycCheck(req.body);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
       logger.trace('error', JSON.stringify(error));
       return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(ApiResponses.error(error, error.message, HttpStatus.INTERNAL_SERVER_ERROR));
    }
  }
}

export default new KycController();
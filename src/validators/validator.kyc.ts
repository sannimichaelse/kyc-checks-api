import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';
import { BaseValidator } from './validator.base';
import { kycSchema } from '../schema/schema.kyc';


class KycValidator {
  constructor() {
  }

   async validateKyc(req: Request, res: Response, next: NextFunction) {
     try {
       await BaseValidator.prototype.validate(req.body, kycSchema);
       next();
     } catch (e) {
       return res.status(HttpStatus.BAD_REQUEST).json(e);
     }
  }
}

export default new KycValidator();


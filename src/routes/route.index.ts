import { Request, Response } from 'express';
import * as express from 'express';
import KycValidator from '../validators/validator.kyc';
import KycController from '../controllers/controllers.kyc';

const router = express.Router();

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Welcome to KYC Checks API Version 1',
        code: 200,
        status: 'success'
    });
  });
  router.post('/kyc', KycValidator.validateKyc, KycController.performKycChecks);
  return router;
};

export default routes;

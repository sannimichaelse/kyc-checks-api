import { logger } from '../config/logger';
import { post } from '../utils/utils.axios.instance';


class KycService {

  constructor() {
  }

  public async initiateKycCheck(body: object) {
      const result = await post(body);
      const response = this.resolveKycChecks(result.data);
      logger.info('kycCheckResponse ', result.data);
      return response;
  }

  private resolveKycChecks(body: any) {
    const { verificationResultCode } = body;
    const kycResolver = {
      Y: {
        kycResult: true
      },
      N: {
        kycResult: false
      },
      D: {
        code : 'D',
        message: 'Document Error'
      },
      S: {
        code : 'S',
        message: 'Server Error'
      }
    };

    logger.info('kycResolver ', kycResolver[verificationResultCode]);
    return kycResolver[verificationResultCode] || {};
  }


}

export default new KycService();
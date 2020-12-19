import { logger } from '../config/logger';
import { post } from '../utils/utils.axios.instance';
import { MSG_DOCUMENT_ERROR, MSG_SERVER_ERROR } from '../utils/utils.response.messages';


class KycService {

  constructor() {
  }

  /**
   * initiateKycCheck
   * @param {Object} body
   */
  public async initiateKycCheck(body: object) {
      const result = await post(body);
      const response = this.resolveKycChecks(result.data);
      return response;
  }

  /**
   * resolveKycChecks
   * @param {Object} body
   */
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
        message: MSG_DOCUMENT_ERROR
      },
      S: {
        code : 'S',
        message: MSG_SERVER_ERROR
      }
    };

    return kycResolver[verificationResultCode] || {};
  }


}

export default new KycService();
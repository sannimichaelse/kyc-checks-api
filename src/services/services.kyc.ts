import HttpStatus from 'http-status-codes';
import ApiResponse from '../handlers/handles.api.responses';
import { post } from '../utils/utils.axios.instance';


class KycService {

  constructor() {
  }

  async initiateKycCheck(body: object) {
    try {
        const result = await post(body);
        const response = this.resolveKycChecks(result.data);
        return response;
    } catch (error) {
        return ApiResponse.error(error, 'Error Performing Operation', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  resolveKycChecks(body: any) {
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

    return kycResolver[verificationResultCode] || {};
  }


}

export default new KycService();
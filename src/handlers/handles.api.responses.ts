  import HttpStatus from 'http-status-codes';

  class ApiResponse {
    constructor() {}

  /**
   * error object
   * @param {Object} data
   * @param {string} message
   * @param {code} number
   */
    error(data: any, message: string, code: number) {
      return {
        status: 'error',
        message,
        code,
        data,
      };
    }
  }

  export default new ApiResponse();
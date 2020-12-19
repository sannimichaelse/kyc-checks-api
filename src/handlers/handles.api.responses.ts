  import HttpStatus from 'http-status-codes';

  class ApiResponse {
    constructor() {}

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
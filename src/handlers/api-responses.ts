  import HttpStatus from 'http-status-codes';
  
  class ApiResponse {
    constructor() {}
  
    error(data: any, message: string, code: number) {
      return {
        status: "error",
        message,
        code,
        data,
      };
    }
  
    success(data: any, message: string, code: number) {
      return {
        status: "success",
        message,
        code,
        data,
      };
    }
  
    ok(message: string) {
      return {
        status: true,
        message,
        code: HttpStatus.OK,
      };
    }

  }
  
  export default new ApiResponse();
  import HttpStatus from 'http-status-codes';
  
  class ApiResponse {
    constructor() {}
  
    error(data: any, message: string, code: number) {
      return {
        status: "error",
        message,
        code: this.getStatusCode(code),
        data,
      };
    }
  
    success(data: any, message: string, code: number) {
      return {
        status: "success",
        message,
        code: this.getStatusCode(code),
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
  
    getStatusCode(code) {
      let statusCode;
      switch (code) {
        case 200:
          statusCode = HttpStatus.OK;
          break;
        case 201:
          statusCode =HttpStatus.CREATED;
          break;
        case 401:
          statusCode = HttpStatus.UNAUTHORIZED;
          break;
        case 403:
          statusCode = HttpStatus.FORBIDDEN;
          break;
        case 400:
          statusCode = HttpStatus.BAD_REQUEST;
          break;
        case 404:
          statusCode = HttpStatus.NOT_FOUND;
          break;
        case 409:
          statusCode = HttpStatus.CONFLICT;
          break;
        case 410:
          statusCode = HttpStatus.GONE;
          break;
        case 422:
          statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
          break;
        case 500:
          statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
          break;
      }
  
      return statusCode;
    }
  }
  
  export default new ApiResponse();
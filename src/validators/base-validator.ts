import * as Joi from "joi";
import HttpStatus from 'http-status-codes';
import ApiResponse from "../handlerS/api-responses";

export class BaseValidator {
  constructor() {}

  async validate(body: object, schema: object) {
    function toTitleCase(str: string) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
    return new Promise((resolve, reject) => {
      Joi.validate(body, schema)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          let message = err.details[0].message.replace(/[\"]/gi, "");
          reject(
            ApiResponse.error(null, toTitleCase(message), HttpStatus.BAD_REQUEST)
          );
        });
    });
  }
}
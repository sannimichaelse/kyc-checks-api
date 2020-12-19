import * as Joi from 'joi';
import HttpStatus from 'http-status-codes';
import ApiResponse from '../handlers/handles.api.responses';

export class BaseValidator {
  constructor() {}

  async validate(body: object, schema: object) {

    return new Promise((resolve, reject) => {
      Joi.validate(body, schema)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          const message = err.details[0].message.replace(/[\"]/gi, '');
          reject(
            ApiResponse.error({}, message, HttpStatus.BAD_REQUEST)
          );
        });
    });
  }
}
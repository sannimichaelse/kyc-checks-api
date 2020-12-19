import * as Joi from 'joi';
import HttpStatus from 'http-status-codes';
import ApiResponse from '../handlers/handles.api.responses';
import {
    isValidDateFormat
} from './validator.date';
import {
    logger
} from '../config/logger';
import { MSG_INVALID_DATE_FORMAT } from '../utils/utils.response.messages';

export class BaseValidator {
    constructor() {}

    async validate(body: object, schema: object) {
        return new Promise((resolve, reject) => {
            Joi.validate(body, schema)
                .then((result) => {
                    const valid = isValidDateFormat(body);
                    if (!valid) {
                        logger.error('INVALID_DATE_FORMAT ', MSG_INVALID_DATE_FORMAT);
                        return reject(
                            ApiResponse.error({}, MSG_INVALID_DATE_FORMAT, HttpStatus.BAD_REQUEST)
                        );
                    }
                    resolve(result);
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
import HttpStatus from 'http-status-codes';
import { logger } from '../config/logger';

/**
 * Error response middleware for 404 not found.
 * @param {Object} req
 * @param {Object} res
 */
export const notFound = (req, res) => {
  logger.error(`
    status - ${HttpStatus.INTERNAL_SERVER_ERROR}
    message - Ooops, route not found
    url - ${req.originalUrl}
    method - ${req.method}
    IP - ${req.ip}
  `);
  res.status(HttpStatus.NOT_FOUND).json({
    code: HttpStatus.NOT_FOUND,
    message: 'Ooops, route not found',
    data: {}
  });
};

/**
 * Generic error response middleware for internal server errors.
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export const genericErrorHandler = (err, req, res, next) => {
  logger.error('ERROR_HANDLER');
  console.log(err);
  logger.error(`
    status - ${HttpStatus.INTERNAL_SERVER_ERROR}
    message - ${err.stack}
    url - ${req.originalUrl}
    method - ${req.method}
    IP - ${req.ip}
  `);

  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    data: err,
    message: err.message
  });
};

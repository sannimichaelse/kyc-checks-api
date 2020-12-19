import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { logger } from '../config/logger';

/**
 * Error response middleware for 404 not found.
 * @param {Object} req
 * @param {Object} res
 */
export const notFound = (req: Request, res: Response) => {
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

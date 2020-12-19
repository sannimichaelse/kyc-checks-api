import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { logger } from '../config/logger';

/**
 * Error response middleware for 404 not found.
 * @param {Object} req
 * @param {Object} res
 */
export const notFound = (req: Request, res: Response) => {
  res.status(HttpStatus.NOT_FOUND).json({
    code: HttpStatus.NOT_FOUND,
    message: 'Ooops, route not found',
    data: {}
  });
};

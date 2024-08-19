/**
 * Error-handling middleware.
 *
 * @param {Error} err - The error object.
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 */
function errorHandler(err, req, res, next) {
  const statusCode = err.cause ? (typeof err.cause === 'number' ? err.cause : 500) : 500;
  res.status(statusCode).json({
    status: 'Failed',
    message: err.message,
    err,
    stack: err.stack
  });
}

export default errorHandler;


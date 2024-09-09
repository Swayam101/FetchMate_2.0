// Async Wrapper Catches errors using try-catch and redirects to the express-error-handling middleware

module.exports = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

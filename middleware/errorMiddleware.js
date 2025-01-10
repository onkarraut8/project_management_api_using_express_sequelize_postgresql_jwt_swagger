const errorMiddleware = (err, req, res, next) => {
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).send({ error: err.errors.map(e => e.message) });
    }
  
    console.error(err);
    res.status(500).send({ error: 'Something went wrong' });
  };
  
  module.exports = errorMiddleware;
  
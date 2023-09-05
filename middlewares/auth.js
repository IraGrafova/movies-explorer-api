const jwt = require('jsonwebtoken');
const { LoginError } = require('./errors');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;
  const { NODE_ENV, JWT_SECRET } = process.env;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw (new LoginError('Отсутствуют права для данного действия'));
  }

  req.user = payload;

  next();
};

module.exports = auth;

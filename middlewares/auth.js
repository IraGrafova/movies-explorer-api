const jwt = require('jsonwebtoken');
const { LoginError } = require('./errors');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, 'SECRET');
  } catch (err) {
    throw (new LoginError('Отсутствуют права для данного действия'));
  }

  req.user = payload;

  next();
};

module.exports = auth;

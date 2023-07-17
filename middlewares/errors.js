// eslint-disable-next-line max-classes-per-file
const { celebrate, Joi } = require('celebrate');

class ValidationError extends Error {
  constructor(err) {
    super(err);
    this.statusCode = 400;
  }
}

class LoginError extends Error {
  constructor(err) {
    super(err);
    this.statusCode = 401;
  }
}

class AccessError extends Error {
  constructor(err) {
    super(err);
    this.statusCode = 403;
  }
}

class NotFound extends Error {
  constructor(err) {
    super(err);
    this.statusCode = 404;
  }
}

class SignupError extends Error {
  constructor(err) {
    super(err);
    this.statusCode = 409;
  }
}

const idJoi = celebrate({
  params: Joi.object().keys({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
  }),
});

const signinJoi = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const signupJoi = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const changeUserJoi = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
  }),
});

const createMovieJoi = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(/https?:\/\/[-._~:/?#[\]@!$&'()*+,;=\w]{1,}/m).required(),
    trailerLink: Joi.string().pattern(/https?:\/\/[-._~:/?#[\]@!$&'()*+,;=\w]{1,}/m).required(),
    thumbnail: Joi.string().pattern(/https?:\/\/[-._~:/?#[\]@!$&'()*+,;=\w]{1,}/m).required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports = {
  ValidationError,
  LoginError,
  AccessError,
  NotFound,
  SignupError,
  createMovieJoi,
  idJoi,
  signinJoi,
  signupJoi,
  changeUserJoi,
};

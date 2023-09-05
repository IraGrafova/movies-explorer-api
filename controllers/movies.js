const Movie = require('../models/movie');
const {
  AccessError,
  ValidationError,
  NotFound,
} = require('../middlewares/errors');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.status(200).send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  Movie.create({
    ...req.body,
    owner: req.user._id,
  })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('Переданы некорректные данные при создании карточки'));
      } else next(err);
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.id)
    .populate('owner')
    .orFail(() => new NotFound('id не найден'))
    // eslint-disable-next-line consistent-return
    .then((movie) => {
      // eslint-disable-next-line eqeqeq
      if (req.user._id != movie.owner._id) {
        next(new AccessError('Отсутствуют права для данного действия'));
      } else {
        return Movie.deleteOne(movie).then(() => {
          res.send(movie);
        });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('Неверный id'));
      } else next(err);
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};

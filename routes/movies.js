const router = require('express').Router();
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');

const { createMovieJoi, idJoi } = require('../middlewares/errors');

router.get('/', getMovies); // # возвращает все сохранённые текущим пользователем фильмы

router.post('/', createMovieJoi, createMovie); // # создаёт фильм с переданными в теле
// # country, director, duration, year, description, image, trailer,
// nameRU, nameEN и thumbnail, movieId

router.delete('/:id', idJoi, deleteMovie); // # удаляет сохранённый фильм по id

module.exports = router;

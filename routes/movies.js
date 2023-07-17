const router = require('express').Router();
const {
  getMovies, createMovie, deleteMovie
} = require('../controllers/movies');

//const { createCardJoi, idJoi } = require('../middlewares/errors');

router.get('/', getMovies); // # возвращает все сохранённые текущим  пользователем фильмы
// GET /movies

router.post('/', createMovie);

//router.post('/', createCardJoi, createMovie); // # создаёт фильм с переданными в теле
// # country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
// POST /movies

router.delete('/:id', deleteMovie);
// router.delete('/:id', idJoi, deleteMovie); // # удаляет сохранённый фильм по id
// DELETE /movies/_id

module.exports = router;

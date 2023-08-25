const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: { // — страна создания фильма. Обязательное поле-строка.
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  director: { // — режиссёр фильма. Обязательное поле-строка.
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  duration: { // — длительность фильма. Обязательное поле-число.
    type: Number,
    required: [true, 'Поле должно быть заполнено'],
  },
  year: { // — год выпуска фильма. Обязательное поле-строка.
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  description: { // — описание фильма. Обязательное поле-строка.
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  image: { // — ссылка на постер к фильму. Обязательное поле-строка. Запишите её URL-адресом.
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Некорректный URL',
    },
  },
  trailerLink: { // — ссылка на трейлер фильма. Обязательное поле-строка. Запишите её URL-адресом.
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Некорректный URL',
    },
  },
  owner: { // — _id пользователя, который сохранил фильм. Обязательное поле.
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  // — id фильма, который содержится в ответе сервиса MoviesExplorer.
  // Обязательное поле в формате number.
  movieId: {
    type: Number,
    required: [true, 'Поле должно быть заполнено'],
  },
  nameRU: { // — название фильма на русском языке. Обязательное поле-строка.
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  nameEN: { // — название фильма на английском языке. Обязательное поле-строка.
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);

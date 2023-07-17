const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');

const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://127.0.0.1/Diplom', {
  useNewUrlParser: true,
});

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(helmet()); // Заголовки безопасности проставлять автоматически
app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса
app.use(cookieParser());

app.use(router);

app.use(errors());
app.use(errorHandler);

app.listen(PORT);

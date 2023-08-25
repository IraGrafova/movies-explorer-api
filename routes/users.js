const router = require('express').Router();
const {
  changeUser, getMe, getUsers
} = require('../controllers/users');
const { changeUserJoi } = require('../middlewares/errors');

router.get('/me', getMe); // # возвращает информацию о пользователе (email и имя)

router.patch('/me', changeUserJoi, changeUser); // # обновляет информацию о пользователе (email и имя)

router.get('/', getUsers);

module.exports = router;

const router = require('express').Router();
const {
  changeUser, getMe,
} = require('../controllers/users');
//const { idJoi, avatarValidationJoi, changeUserJoi } = require('../middlewares/errors');

// router.get('/:id', getMe);
router.get('/me', getMe); // # возвращает информацию о пользователе (email и имя)
// GET /users/me

// router.patch('/:id', changeUser);
router.patch('/me', changeUser);
//router.patch('/me', changeUserJoi, changeUser); // # обновляет информацию о пользователе (email и имя)
// PATCH /users/me

module.exports = router;

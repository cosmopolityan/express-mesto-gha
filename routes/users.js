const userRouter = require('express').Router();

const validate = require('../utils/validate');

const {
  getUsers,
  getUser,
  getCurrentUser,
  createUser,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users');

userRouter.get('/users', getUsers);
userRouter.get('/users/:userId', getUser);
userRouter.get('/users/me', getCurrentUser);
userRouter.post('/users', createUser);

userRouter.patch('/users/me', updateUser);
userRouter.patch('/users/me/avatar', updateUserAvatar);

module.exports = userRouter;

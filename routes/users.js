const userRouter = require('express').Router();

const { userNameValidation, userAboutValidation, userAvatarValidation } = require('../middlewares/validation');

const {
  getUsers,
  getUser,
  getCurrentUser,
  createUser,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users');

userRouter.get('/users', getUsers);
userRouter.get('/users/:userId', userNameValidation, getUser);
userRouter.get('/users/me', getCurrentUser);
userRouter.post('/users', createUser);
userRouter.patch('/users/me', userAboutValidation, updateUser);
userRouter.patch('/users/me/avatar', userAvatarValidation, updateUserAvatar);

module.exports = userRouter;

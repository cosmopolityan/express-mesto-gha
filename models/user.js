const mongoose = require('mongoose');

const stringLength = {
  type: String,
  minlength: 2,
  maxlength: 30,
};

const validate = require('../utils/validate');

const userSchema = new mongoose.Schema(
  {
    name: {
      ...stringLength,
      required: 'Имя пользователя',
      default: 'Жак-Ив Кусто',
    },
    about: {
      ...stringLength,
      required: 'Описание',
      default: 'Исследователь',
    },
    avatar: {
      type: String,
      required: 'Аватар',
      default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
      validate: validate.URL,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: validate.email,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { versionKey: false },
);

userSchema.statics.findUserByCredentials = function (email, password) {
  return User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Неверный логин и/или пароль'));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error('Неверный логин и/или пароль'));
        }
        return user;
      });
    });
};

module.exports = mongoose.model('user', userSchema);

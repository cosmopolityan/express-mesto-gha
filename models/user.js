const mongoose = require('mongoose');

const stringLength = {
  type: String,
  minlength: 2,
  maxlength: 30,
};

const regUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

const urlValidator = (val) => regUrl.test(val);

const validateUrl = {
  validator: urlValidator,
  message: 'Укажите ссылку на изображение',
};

const userSchema = new mongoose.Schema(
  {
    name: {
      ...stringLength,
      required:
        'Имя пользователя',
    },
    about: {
      ...stringLength,
      required: 'Описание',
    },
    avatar: {
      type: String,
      required: 'Аватар',
      validate: validateUrl,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('user', userSchema);




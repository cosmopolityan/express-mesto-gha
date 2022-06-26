const mongoose = require('mongoose');

const stringLength = {
  type: String,
  minlength: 2,
  maxlength: 30,
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




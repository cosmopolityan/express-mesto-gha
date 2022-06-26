const mongoose = require('mongoose');

const stringLength = {
  type: String,
  minlength: 2,
  maxlength: 30,
};

const refUserId = {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user',
};

const regUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

const urlValidator = (val) => regUrl.test(val);

const validateUrl = {
  validator: urlValidator,
  message: 'Укажите ссылку на изображение',
};

const cardSchema = new mongoose.Schema(
  {
    name: {
      ...stringLength,
      required: true,
    },
    link: {
      type: String,
      required: true,
      validator: validateUrl,
    },
    owner: {
      ...refUserId,
      required: true,
    },
    likes: [
      {
        ...refUserId,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('card', cardSchema);



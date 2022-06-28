const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  family: 4,
  // useUnifiedTopology: true,
  // useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '62bb7174b8f527cbb1602029',
  };
  next();
});

app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use((req, res) => res
  .status(404)
  .send({ message: 'Такой страницы не существует :(' }));

app.use(
  cors({
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  }),
);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Работает ${PORT} порт`);
});

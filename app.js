const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const { PORT = 3000, HOST = 'localhost' } = process.env;

const app = express();

app.use(
  cors({
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  }),
);

app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/mestodb `, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
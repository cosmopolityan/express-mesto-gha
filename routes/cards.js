const cardRouter = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  unLikeCard,
} = require('../controllers/cards');

cardRouter.get('/', getCards);
cardRouter.post('/', createCard);

cardRouter.delete('/:id', deleteCard); // id
cardRouter.put('/:id/likes', likeCard); // id
cardRouter.delete('/:id/likes', unLikeCard); // id

module.exports = cardRouter;
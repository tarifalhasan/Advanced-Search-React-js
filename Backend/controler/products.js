import product from '../Data.js';

export const getProducts = (req, res, next) => {
  res.send(product);
};

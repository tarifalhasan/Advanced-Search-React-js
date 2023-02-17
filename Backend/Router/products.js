import express from 'express';
import product from '../Data.js';
const router = express.Router();
import { getProducts } from '../controller/products.js';
// Routes

// get all products
router.get('/', getProducts);

// get single product
router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  const getOneProduct = product.find(product => product.slug === slug);
  res.send(getOneProduct);
});
export default router;

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import product from './Data.js';
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

// app start

// products List

app.get('/products', (req, res) => {
  res.send(product);
});
app.get('/products/:slug', (req, res) => {
  const { slug } = req.params;
  const getOneProduct = product.find(product => product.slug === slug);
  res.send(getOneProduct);
});

// product detail

// database connection with mongodb=

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

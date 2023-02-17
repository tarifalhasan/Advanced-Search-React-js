import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Home = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState();
  const [searchToggle, setSearchToggle] = useState(false);
  const [slug, setSlug] = useState('');

  const url = 'http://localhost:4000/products/';
  const getAllProducts = () => {
    axios.get(url).then(res => {
      const products = res;
      setProducts(products.data);
    });
  };
  // fetch all products
  useEffect(() => {
    getAllProducts();
  }, []);

  // filter products

  const filterDataQuery = () => {
    const searchProduct = products?.find(
      product => product.product_code === query
    );
    setSearchToggle(true);
    return setSlug(searchProduct.slug);
  };
  // Slug Configuration
  console.log(slug);
  console.log(searchToggle);
  return (
    <div className="container mx-auto">
      <div className="row  homepage">
        <div className="col heading">
          <h5>Recepcion de Material -Generacion de Etiquetas</h5>
        </div>
      </div>
      <div className="row" style={{ marginTop: '8rem' }}>
        <div className="card w-35 mx-auto">
          <div className="card-body text-center">
            <h5 className="card-title">Generacion de Etiquetas</h5>
            <input
              type="search"
              className="form-control my-10"
              placeholder="Ingresar Codiogo Producto"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />

            <Link
              to={searchToggle ? slug : ''}
              onClick={filterDataQuery}
              className="btn btn-primary"
            >
              Adelante
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

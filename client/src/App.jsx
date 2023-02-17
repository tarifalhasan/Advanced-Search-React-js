import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Layout from './layout/Layout';
import Search from './pages/Search';
import { Route, Routes } from 'react-router-dom';
import Product from './components/product/Product';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path="product" element={<Search />} />
        <Route path={`product/:slug`} element={<Product />} />
      </Routes>
    </Layout>
  );
}

export default App;

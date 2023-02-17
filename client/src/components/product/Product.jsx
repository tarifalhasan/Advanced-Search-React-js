import React, { useState, useEffect } from 'react';
import styles from './Product.module.css';
import Barcode from 'react-barcode';
import QRCode from 'react-qr-code';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const product = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { slug } = useParams();

  const [product, setProducts] = useState({});
  const url = `http://localhost:4000/products/${slug}`;
  const getAllProducts = () => {
    axios.get(url).then(res => {
      const products = res;
      setIsLoading(false);
      setProducts(products.data);
    });
  };
  // fetch all products
  useEffect(() => {
    getAllProducts();
  }, []);

  //  print product barcode and qr code Handler

  const printBarcode = () => {
    window.print();
  };

  return (
    <div className={`container ${styles.products_container}`}>
      <div className={styles.product}>
        <div className="row ">
          <div className="col-3">
            <img
              src={`${product.images}`}
              alt={product.name}
              style={{
                width: '202px',
                height: '118px',
              }}
            />
          </div>
          <div className="col-9">
            <h4>
              <span className="text-muted">ABC123</span>
              <span>-</span> {product.name}
            </h4>
            <div className="d-flex justify-content-between py-2">
              <h5>Localizacion: {product.Localizacion}</h5>
              <span className="d-block text-muted">combiar Localizacion</span>
            </div>
            <div className="bar_code">
              <h5 style={{ lineHeight: '5px' }}>Barcode :</h5>
              <h5>{product.Barcode}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.barcode}>
        <div className="row ">
          <div className="col-8">
            <div className={`d-flex  ${styles.Barcode_Qrcode}`}>
              <div>
                <h5>ABC123 -{product.name}</h5>
                <h5>{product.Barcode}-1-10</h5>
                <Barcode width={2} height={60} value="ABC-123-456" />
              </div>

              <div
                style={{
                  height: 'auto',
                  maxWidth: '120px',
                  width: '100%',
                  marginTop: '14px',
                }}
              >
                <QRCode
                  size={256}
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                  value={'tarif'}
                  viewBox={`0 0 256 256`}
                />
              </div>
            </div>
          </div>
          <div className="col-4 d-flex flex-column align-items-center justify-content-center">
            <button onClick={printBarcode} className="btn btn-primary ">
              Imprimir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;

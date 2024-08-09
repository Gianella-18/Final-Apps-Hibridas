import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/product.css';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/productos');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }

      return (
        <div className="product-list">
          {/* Lista de productos aquí */}
        </div>
      );

    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

// src/pages/CategoryProductsPage/CategoryProductsPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom"; 
import { fetchProductsByCategory } from "../../redux/slices/productsSlice";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from './CategoryProductsPage.module.css';

const CategoryProductsPage = () => {
  const { categoryId } = useParams(); 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProductsByCategory(categoryId)); 
    }
  }, [dispatch, categoryId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available.</div>; // Сообщение об ошибке
  }

  return (
    <div className={styles.productsPage}>
      <Navbar />
      <h1 className={styles.pageTitle}>Category Products</h1>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className={styles.productItem}>
            <div className={styles.productWrapper}>
              <img
                src={`http://localhost:3333${product.image}`} 
                alt={product.title}
                className={styles.productImage}
              />
              <p className={styles.productName}>{product.title}</p>
              <p className={styles.productPrice}>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryProductsPage;

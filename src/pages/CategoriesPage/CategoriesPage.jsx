// src/pages/CategoriesPage/CategoriesPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom"; 
import styles from './CategoriesPage.module.css';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.categoriesPage}>
      <Navbar />
      <h1 className={styles.pageTitle}>Categories</h1>

      <div className={styles.categoryGrid}>
        {categories.map((category) => (
          <Link 
            to={`/categories/${category.id}`} // Изменено на /categories/${category.id}
            key={category.id}
            className={styles.categoryItem}
          >
            <img 
              src={`http://localhost:3333${category.image}`} 
              alt={category.title} 
              className={styles.categoryImage} 
            />
            <p className={styles.categoryName}>{category.title}</p>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default CategoriesPage;

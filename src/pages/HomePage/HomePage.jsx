import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { Link } from "react-router-dom"; 
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.homePage}>
      <Navbar />
      <div className={styles.banner}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <button className={styles.bannerButton}>Check Out</button>
      </div>

      <div className={styles.sectionHeader}>
         <h2>Categories</h2>
         <Link to="/categories" className={styles.allButton}>All Categories</Link>
      </div>

      <div className={styles.categoryGrid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryItem}>
            <Link to={`/categories/${category.id}`}> {/* Изменено на /categories/${category.id} */}
              <img src={`http://localhost:3333${category.image}`} alt={category.title} />
              <p>{category.title}</p>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from './AllProductsPage.module.css';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    let filtered = [...products];
    if (priceRange.min || priceRange.max) {
      filtered = filtered.filter((product) => {
        const price = product.price;
        return (
          (priceRange.min === "" || price >= priceRange.min) &&
          (priceRange.max === "" || price <= priceRange.max)
        );
      });
    }

    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === "price-low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [priceRange, sortBy, products]);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.productsPage}>
      <Navbar />
      <h1 className={styles.pageTitle}>All Products</h1>

      {/* Фильтры */}
      <div className={styles.filters}>
        <input
          type="number"
          name="min"
          placeholder="Min Price"
          value={priceRange.min}
          onChange={handlePriceChange}
        />
        <input
          type="number"
          name="max"
          placeholder="Max Price"
          value={priceRange.max}
          onChange={handlePriceChange}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">Sort By</option>
          <option value="newest">Newest</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className={styles.productLink}>
            <div className={styles.productItem}>
              <img 
                className={styles.productImage} 
                src={`http://localhost:3333${product.image}`} 
                alt={product.name || product.title || "Unnamed Product"} 
              />
              <p className={styles.productName}>{product.name || product.title || "Unnamed Product"}</p>
              <p className={styles.productPrice}>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AllProductsPage;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from './ProductPage.module.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3333/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data[0]));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigate("/cart");
  };

  if (!product) return <div>Loading...</div>;

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className={styles.productPage}>
      <Navbar />
      <div className={styles.productContainer}>
        <img src={`http://localhost:3333${product.image}`} alt={product.title} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h1 className={styles.productName}>{product.title}</h1>
          <p className={styles.productPrice}>Price per unit: ${product.price}</p>
          <p className={styles.totalPrice}>Total Price: ${totalPrice}</p> {/* Динамическая цена */}

          <div className={styles.actionContainer}>
            <div className={styles.quantityContainer}>
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button onClick={handleAddToCart} className={styles.addToCartButton}>
              Add to Cart
            </button>
          </div>

          <p className={styles.productDescription}>{product.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

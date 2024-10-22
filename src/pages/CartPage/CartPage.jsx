import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartHeader}>
        <h1>Shopping Cart</h1>
        <button onClick={() => navigate("/products")} className={styles.backButton}>
          Back to the store
        </button>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cart.map((item) => {
            const itemTotalPrice = (item.price * item.quantity).toFixed(2);

            return (
              <div key={item.id} className={styles.cartItem}>
                <img src={`http://localhost:3333${item.image}`} alt={item.title} />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>Price per unit: ${item.price}</p>
                  <p>Total Price: ${itemTotalPrice}</p>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className={styles.removeButton} onClick={() => handleRemove(item.id)}>
                  ✖
                </button>
              </div>
            );
          })}
        </div>

        <div className={styles.orderDetails}>
          <h2>Order Details</h2>
          <p>Total Items: {cart.length}</p>
          <p>Total: ${total.toFixed(2)}</p>
          <form className={styles.orderForm}>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email" required />
            <button type="submit" className={styles.orderButton}>
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

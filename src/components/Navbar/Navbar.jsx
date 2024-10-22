import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import cartIcon from '../../assets/cart.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.navLinks}>
        <Link to="/">Main Page</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">All Products</Link>
        <Link to="/sales">All Sales</Link>
      </div>
      <img
        src={cartIcon}
        alt="Cart"
        className={styles.cartIcon}
        onClick={() => navigate('/cart')}
      />
    </nav>
  );
};

export default Navbar;

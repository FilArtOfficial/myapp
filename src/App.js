import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import CategoryProductsPage from './pages/CategoryProductsPage/CategoryProductsPage';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import DiscountedProductsPage from './pages/DiscountedProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:categoryId" element={<CategoryProductsPage />} />
      <Route path="/products" element={<AllProductsPage />} />
      <Route path="/discounts" element={<DiscountedProductsPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

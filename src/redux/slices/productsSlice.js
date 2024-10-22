// src/redux/slices/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный запрос для получения всех продуктов
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('http://localhost:3333/products/all');
    return response.data;
  }
);

// Асинхронный запрос для получения продуктов по категории
export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (categoryId) => {
    const response = await axios.get(`http://localhost:3333/categories/${categoryId}`);
    return response.data.data; // Изменено на response.data.data
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Теперь это массив продуктов
      })
      .addCase(fetchProductsByCategory.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productsSlice.reducer;

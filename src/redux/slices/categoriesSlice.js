import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Загрузка категорий
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetch('http://localhost:3333/categories/all');
  return response.json();
});


const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
    sales: [],  // Начальное значение как пустой массив
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
      })
  },
});


export default categoriesSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetch('http://localhost:3333/categories/all');
  return response.json();
});


const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
    sales: [],  
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



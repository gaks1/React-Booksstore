import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

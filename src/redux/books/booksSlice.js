import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = '2ADQRdi3gXnFzDS1QgQh';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const transformData = (data) => {
  const keys = Object.keys(data);
  return keys.map((key) => {
    const bookData = data[key][0];

    return {
      item_id: key,
      author: bookData.author,
      title: bookData.title,
      category: bookData.category,
    };
  });
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${url}${appId}/books`);
    const data = transformData(response.data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
  try {
    const response = await axios.post(`${url}${appId}/books`, book);
    return { message: response.data, book };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${url}${appId}/books/${id}`);
    return { message: response.data, id };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchBooks.fulfilled]: (state, action) => ({
      ...state,
      books: action.payload,
      isLoading: false,
    }),
    [fetchBooks.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [addBook.pending]: (state) => ({ ...state, isLoading: true }),
    [addBook.fulfilled]: (state, action) => ({
      ...state,
      books: [...state.books, action.payload.book],
      isLoading: false,
    }),
    [addBook.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [removeBook.pending]: (state) => ({ ...state, isLoading: true }),
    [removeBook.fulfilled]: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload.id),
      isLoading: false,
    }),
    [removeBook.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
});

export default booksSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const fetchBooks = createAsyncThunk("bookStore/fetchBooks", async (params) => {
  try {
    const { url, fetchParams } = params;
    const data = await fetch(url, fetchParams);
    return await data.json();
  } catch (err) {
    return err;
  }
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.book = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const fetchedBooks = (state) => state.bookStore.books;
export const fetchLoading = (state) => state.bookStore.isLoading;
export const fetchError = (state) => state.bookStore.error;
export default bookSlice.reducer;

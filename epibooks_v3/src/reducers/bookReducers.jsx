import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  isLoading: false,
  error: null,
  filteredBooks: [],
};

export const fetchBooks = createAsyncThunk(
  "bookStore/fetchBooks",
  async (params) => {
    try {
      const { url, fetchParams } = params;
      const data = await fetch(url, fetchParams);
      return await data.json();
    } catch (err) {
      return err;
    }
  },
);

const bookSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    setBooks: (state, action) => {
      state.filteredBooks.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      state.filteredBooks = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { setBooks } = bookSlice.actions;

export const fetchedBooks = (state) => state.bookStore.books;
export const fetchLoading = (state) => state.bookStore.isLoading;
export const fetchError = (state) => state.bookStore.error;
export const filter = (state) => state.bookStore.filteredBooks;
export default bookSlice.reducer;

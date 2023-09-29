import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  isLoading: false,
  error: null,
  filteredBooks: [],
  selected: false,
  bookId: "",
};

export const fetchBooks = createAsyncThunk(
  "bookStore/fetchBooks",
  async (url) => {
    try {
      const data = await fetch(url);
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
      state.filteredBooks = action.payload;
    },
    setSelected: (state) => {
      state.selected = !state.selected;
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

export const { setBooks, setSelected } = bookSlice.actions;

export const fetchedBooks = (state) => state.bookStore.books;
export const fetchLoading = (state) => state.bookStore.isLoading;
export const fetchError = (state) => state.bookStore.error;
export const filtered = (state) => state.bookStore.filteredBooks;
export const selected = (state) => state.bookStore.selected;
export default bookSlice.reducer;

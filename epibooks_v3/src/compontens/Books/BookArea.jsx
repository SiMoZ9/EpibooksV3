import React, { useEffect, useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import SingleBook from "./SingleBook";
import {
  fetchedBooks,
  fetchLoading,
  fetchError,
  filtered,
  fetchBooks,
  setBooks,
} from "../../reducers/bookReducers";
import { nanoid } from "nanoid";

import { S_value } from "../../reducers/searchReducer";
import { BeatLoader } from "react-spinners";

const BookArea = () => {
  const BOOK_API = "https://epibooks.onrender.com";

  const books = useSelector(fetchedBooks);
  const loading = useSelector(fetchLoading);
  const error = useSelector(fetchError);
  const filteredBooks = useSelector(filtered);

  const searchValue = useSelector(S_value);

  //const [filteredBooks, setFilteredBooks] = useState([]);

  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(fetchBooks(BOOK_API));
  }, []);

  useEffect(() => {
    dispatch(setBooks(books));
  }, [books]);

  return (
    <section className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {error && <h1>Errore durante il caricamento dei libri</h1>}
      {loading && !error && (
        <BeatLoader
          className="w-1"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}

      {!loading && !error}
      {!loading &&
        !error &&
        filteredBooks.map((book) => (
          <SingleBook
            key={nanoid()}
            title={book.title}
            category={book.category}
            img={book.img}
            price={`€ ${book.price}`}
            asin={book.asin}
          />
        ))}
    </section>
  );
};

export default BookArea;

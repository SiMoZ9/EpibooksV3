import React, { useEffect, useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import SingleBook from "./SingleBook";
import {
  fetchedBooks,
  fetchLoading,
  fetchError,
  fetchBooks,
  setBooks,
} from "../../reducers/bookReducers";
import { nanoid } from "nanoid";

import { S_value } from "../../reducers/searchReducer";

const BookArea = () => {
  const BOOK_API = "https://epibooks.onrender.com";

  const params = {
    url: BOOK_API,
    fetchParams: {
      method: "GET",
    },
  };

  const books = useSelector(fetchedBooks);
  const loading = useSelector(fetchLoading);
  const error = useSelector(fetchError);

  const searchValue = useSelector(S_value);

  const [filteredBooks, setFilteredBooks] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(params));
  }, []);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  useEffect(() => {
    dispatch(setBooks(filteredBooks));
  }, [filteredBooks]);

  return (
    <section className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {!loading && !error}
      {!loading &&
        !error &&
        filteredBooks
          .map((book) => (
            <SingleBook
              key={nanoid()}
              title={book.title}
              category={book.category}
              img={book.img}
              price={`€ ${book.price}`}
            />
          ))
          .slice(0, 5)}
    </section>
  );
};

export default BookArea;

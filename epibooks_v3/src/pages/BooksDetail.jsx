import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import {
  fetchedBooks,
  fetchLoading,
  fetchError,
  filtered,
  fetchBooks,
  setBooks,
} from "../reducers/bookReducers";
const BookDetail = () => {
  const { bookId } = useParams(); // prende il parametro bookId (definito nell'App.js)

  const dispatch = useDispatch();
  const data = useSelector(fetchedBooks);
  const loading = useSelector(fetchLoading);
  const error = useSelector(fetchError);

  const API_URL = `https://epibooks.onrender.com/${bookId}`;

  useEffect(() => {
    dispatch(fetchBooks(API_URL));
  }, []);

  console.log(data);

  return (
    <MainLayout>
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                <img className="w-full h-full object-fill" src={data[0].img} />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                    Aggiungi al carrello
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <Link to="/">
                    <button className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                      Torna alla home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold mb-2">{data[0].title}</h2>
              <p className="text-gray-600 text-sm mb-4">{data[0].category}</p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Prezzo: </span>
                  <span className="text-gray-600">{data[0].price}</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700">
                  Descrizione del prodotto
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookDetail;

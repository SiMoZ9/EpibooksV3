import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addComment,
  fetchComments,
  rate,
  Asin,
  cm,
  addRate,
  addAsin,
} from "../../reducers/commentsReducers";
import { removeListener } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const AddComments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const new_comment = useSelector(cm);
  const rating = useSelector(rate);
  const id = useSelector(Asin);

  const API_URL = `https://striveschool-api.herokuapp.com/api/comments/`;

  const fetchParams = {
    url: API_URL,
    params: {
      method: "POST",
      body: JSON.stringify({
        comment: new_comment,
        rate: rating,
        elementId: id,
      }),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDBlOGU4NDIyNzAwMTRjMzI2NzciLCJpYXQiOjE2OTU3MzMxNTgsImV4cCI6MTY5Njk0Mjc1OH0.z-Fxi9IbskrELa5IM7x6ua1Cvdx1FFmvztf_1R_Pwkg",
        "Content-Type": "application/json",
      },
    },
  };

  useEffect(() => {}, []);

  const handleRateInput = (e) => {
    dispatch(addRate(e.target.value));
  };

  const handleCommentInput = (e) => dispatch(addComment(e.target.value));

  const handleSumbit = async (e) => {
    e.preventDefault();
    console.log(rating);
    console.log(new_comment);
    dispatch(fetchComments(fetchParams));

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <form
      className="bg-white p-4 rounded-lg shadow-md"
      onSubmit={handleSumbit}
      id="comment-form"
    >
      <h3 className="text-lg font-bold mb-2">Aggiungi un commento</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
          Valutazione
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Valutazione da 1 a 5"
          name="rate"
          value={rating}
          onChange={handleRateInput}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
          Commento
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="comment"
          rows="3"
          name="comment"
          placeholder="Inserisci il tuo commento"
          value={new_comment}
          onChange={handleCommentInput}
        ></textarea>
      </div>
      <button
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Invia
      </button>
    </form>
  );
};

export default AddComments;

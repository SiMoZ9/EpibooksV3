import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { nanoid } from "nanoid";

import { useDispatch, useSelector } from "react-redux";
import { selected, setSelected } from "../../reducers/bookReducers";
import {
  allComments,
  errors,
  isLoading,
} from "../../reducers/commentsReducers";
import AddComments from "./AddComments";

const CommentArea = () => {
  const comments = useSelector(allComments);
  const loading = useSelector(isLoading);
  const error = useSelector(errors);

  const dispatch = useDispatch();

  const isSelected = useSelector(selected);

  localStorage.setItem("comments", comments);
  localStorage.getItem("comments");

  const closeComments = (e) => {
    dispatch(setSelected(isSelected));
    console.log(isSelected);
  };

  return (
    <>
      <div className={isSelected ? "bg-gray-100 p-6 flex flex-col" : "hidden"}>
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-4 p-6">Comments</h2>
          <button
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 h-auto w-auto rounded focus:outline-none focus:shadow-outline"
            onClick={closeComments}
          >
            Chiudi
          </button>
        </div>
        <AddComments />

        {!loading &&
          !error &&
          comments.map((i) => <CommentList key={nanoid()} reviewList={i} />)}
      </div>
    </>
  );
};

export default CommentArea;

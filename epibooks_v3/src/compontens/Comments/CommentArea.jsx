import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { nanoid } from "nanoid";

import { useSelector } from "react-redux";

const CommentArea = ({ isSelected, loading, error, comments }) => {
  return (
    <>
      <div
        className={isSelected ? "bg-gray-100 p-6 grid grid-cols-2" : "hidden"}
      >
        {!loading &&
          !error &&
          comments.map((i) => <CommentList key={nanoid()} reviewList={i} />)}
      </div>
    </>
  );
};

export default CommentArea;

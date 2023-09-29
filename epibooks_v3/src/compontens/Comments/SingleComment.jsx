import React from "react";

const SingleComment = ({ author, comment, rate }) => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="flex flex-col space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">{author}</h3>
          <p className="text-gray-700 text-sm mb-2">{rate}</p>
          <p className="text-gray-700">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;

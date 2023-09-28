import React from "react";
import SingleBook from "./SingleBook";

const BookArea = () => {
  return (
    <main>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <SingleBook />
      </div>
    </main>
  );
};

export default BookArea;

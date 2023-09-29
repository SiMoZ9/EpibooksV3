import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./compontens/main/Home";
import BookDetail from "./pages/BooksDetail";
import CommentArea from "./compontens/Comments/CommentArea";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<BookDetail />} />
        <Route path="/comments" element={<CommentArea />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

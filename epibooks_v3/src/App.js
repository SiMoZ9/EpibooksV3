import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./compontens/main/Home";
import BookDetail from "./pages/BooksDetail";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<BookDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import {Route, BrowserRouter, Router, Routes} from "react-router-dom";
import Home from "./compontens/main/Home";
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App
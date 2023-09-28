import React from "react";
import Navigation from "../compontens/Navbar/Navbar";
import Footer from "../compontens/Footer/Footer";
const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

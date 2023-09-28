import React from "react";
import Navbar from "../compontens/Navbar/Navbar";
import Footer from "../compontens/Footer/Footer";
const MainLayout = ({children}) => {
    return (
        <>
        <Navbar />
            {children}
        <Footer />
        </>
    );
}

export default MainLayout
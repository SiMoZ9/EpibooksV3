import React from "react";
import MainLayout from "../../layouts/MainLayout";
import BookArea from "../Books/BookArea";
import Welcome from "../WelcomePage/Welcome";

const Home = () => {
  return (
    <MainLayout>
      <main>
        <Welcome />
        <BookArea />
      </main>
    </MainLayout>
  );
};

export default Home;

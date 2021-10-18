import React from "react";
import Home from "../../pages/Home.js";
import Footer from "../footer/Footer.js";
import Header from "../header/HomeHeader.js";

const HomeContainer = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default HomeContainer;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navBar/NavBar";
import Footer from "../footer/Footer";

function Rootrouter() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Rootrouter;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import { ToastContainer } from "react-toastify";

function Rootrouter() {
  return (
    <>
        <ToastContainer position="bottom-right" />
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Rootrouter;

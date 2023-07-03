import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" flex flex-col flex-grow">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

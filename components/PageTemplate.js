import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "../assets/scss/mdb.scss";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => {
  return (
    <>
      <Header />
      <div className="pageContainer">{children}</div>
      <Footer />
    </>
  );
};

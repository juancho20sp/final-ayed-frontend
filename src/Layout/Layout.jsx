import React from "react";
import "./Layout.css";
import Header from "./../Components/Header/Header";

const Layout = (props) => {
  return (
    <div className="layout__container">
      <Header></Header>
      <div className="layout__container--main">{props.children}</div>
    </div>
  );
};

export default Layout;

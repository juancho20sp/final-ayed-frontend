import React from "react";
import "./Header.css";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <div className="header__container">
      <Typography variant="h3">Proyecto Final - AYED</Typography>
      <Typography variant="subtitle1">
        Diego Fernando Ruiz - Juan David Murillo
      </Typography>
    </div>
  );
};

export default Header;

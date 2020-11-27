import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

import Routes from "./../../Routes/Routes";

const SideMenu = (props) => {
  return (
    <>
      <nav className="aside">
        {/* Link a la vista principal*/}
        <NavLink
          to={Routes.home.path}
          activeClassName="link__active"
          className="link"
        >
          <p>Inicio</p>
        </NavLink>

        {/* Link a la pantalla de grafos */}
        <NavLink
          to={Routes.graphs.path}
          activeClassName="link__active"
          className="link"
        >
          <p>Grafos</p>
        </NavLink>

        {/* Link a montón binario */}
        <NavLink
          to={Routes.heap.path}
          activeClassName="link__active"
          className="link"
        >
          <p>Montón binario</p>
        </NavLink>
      </nav>
    </>
  );
};

export default SideMenu;

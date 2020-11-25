import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

import Routes from "./../../Routes/Routes";

import Button from "@material-ui/core/Button";

const SideMenu = (props) => {
  return (
    <>
      <nav className="aside">
        {/* Link a la vista principal*/}
        <NavLink
          to={Routes.home.path}
          // activeClassName="link__active"
          className="link"
        >
          <Button variant="outlined" fullWidth={true}>
            Inicio
          </Button>
        </NavLink>

        {/* Link a la pantalla de grafos */}
        <NavLink
          to={Routes.graphs.path}
          activeClassName="link__active"
          className="link"
        >
          <Button variant="outlined" fullWidth={true}>
            Grafos
          </Button>
        </NavLink>

        {/* Link a montón binario */}
        <NavLink
          to={Routes.heap.path}
          activeClassName="link__active"
          className="link"
        >
          <Button variant="outlined" fullWidth={true}>
            Montón binario
          </Button>
        </NavLink>

        {/* Link a regiones conexas */}
        <NavLink
          to={Routes.regions.path}
          activeClassName="link__active"
          className="link"
        >
          <Button variant="outlined" fullWidth={true}>
            Regiones conexas
          </Button>
        </NavLink>

        {/* Link al algoritmo de Djikstra */}
        <NavLink
          to={Routes.djikstra.path}
          activeClassName="link__active"
          className="link"
        >
          <Button variant="outlined" fullWidth={true}>
            Djikstra
          </Button>
        </NavLink>
      </nav>
    </>
  );
};

export default SideMenu;

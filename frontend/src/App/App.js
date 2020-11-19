import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideMenu from "./../Components/SideMenu/SideMenu";
import Layout from "./../Layout/Layout";
import Main from "./../Components/Main/Main";

/* Vista de grafos */
import Graphs from "./../Views/Graphs/Graphs";

import Routes from "./../Routes/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <SideMenu></SideMenu>

          <Switch>
            <Route exact path={Routes.home.path} component={Main}></Route>
            <Route exact path={Routes.graphs.path} component={Graphs}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideMenu from "./../Components/SideMenu/SideMenu";
import Layout from "./../Layout/Layout";
import Main from "./../Components/Main/Main";

/* Vista de grafos */
import Graphs from "./../Views/Graphs/Graphs";

/* Vista de montón binario */
import BinaryHeap from "./../Views/BinaryHeap/BinaryHeap";

//  Vista de regiones conexas
import Regions from "./../Views/Regions/Regions";

//  Vista del algoritmo de Djikstra
import Djikstra from "./../Views/Djikstra/Djikstra";

//  404
import Page404 from "./../Views/404/404";

import Routes from "./../Routes/Routes";

function App() {
  /*const [initialData, setInitialData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);*/

  return (
    <>
      <BrowserRouter>
        <Layout>
          <SideMenu></SideMenu>

          <Switch>
            <Route exact path={Routes.home.path} component={Main}></Route>
            <Route exact path={Routes.graphs.path} component={Graphs}></Route>
            <Route exact path={Routes.heap.path} component={BinaryHeap}></Route>
            <Route exact path={Routes.regions.path} component={Regions}></Route>
            <Route
              exact
              path={Routes.djikstra.path}
              component={Djikstra}
            ></Route>
            <Route component={Page404}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

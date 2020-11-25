import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideMenu from "./../Components/SideMenu/SideMenu";
import Layout from "./../Layout/Layout";
import Main from "./../Components/Main/Main";

/* Vista de grafos */
import Graphs from "./../Views/Graphs/Graphs";

/* Vista de montón binario */
import BinaryHeap from "./../Views/BinaryHeap/BinaryHeap";

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
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

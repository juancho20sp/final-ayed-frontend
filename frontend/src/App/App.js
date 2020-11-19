import React from "react";
import SideMenu from "./../Components/SideMenu/SideMenu";
import Layout from "./../Layout/Layout";
import Main from "./../Components/Main/Main";

function App() {
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Main></Main>
    </Layout>
  );
}

export default App;

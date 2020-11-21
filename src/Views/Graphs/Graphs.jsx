import React from "react";
import "./Graphs.css";

/* Importamos los formularios */
import FormTwo from "./../../Components/Forms/FormTwo/FormTwo";

const test1 = {
  start: 0,
  goal: 4,
  edges: "0-1,0-2,0-3,3-4"
};

const test = () => {
  fetch("graph", {
    method: "PUT",
    body: JSON.stringify(test1)
  })
    .then((res) => res.json())
    .catch((err) => console.log("Error:", err))
    .then((res) => console.log("Yei", res));
};

const Graphs = () => {
  return (
    <>
      <div className="graph__container">
        <h2 className="graph__title">Grafos</h2>

        <FormTwo title="yei"></FormTwo>
      </div>
    </>
  );
};

export default Graphs;

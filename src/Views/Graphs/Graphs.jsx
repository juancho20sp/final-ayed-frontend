import React, { useState } from "react";
import "./Graphs.css";

/* Importamos los formularios */
import FormTwo from "./../../Components/Forms/FormTwo/FormTwo";
import GraphTable from "./../../Components/Tables/GraphTables/GraphTables";
import Button from "@material-ui/core/Button";

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
  const [pairs, setPairs] = useState([]);
  const [limits, setLimits] = useState({
    start: null,
    goal: null
  });

  console.log(limits);
  console.log(pairs);

  const titles1 = ["Nodo de inicio", "Nodo objetivo", ""];
  const titles2 = ["Nodo inicial", "Nodo final", ""];

  const deleteElement = (key) => {
    setPairs(pairs.filter((pair, index) => index != key));
  };

  const sendToBackend = () => {
    let edges = "";

    pairs.map((pair, index) => {
      if (index + 1 != pairs.length) {
        edges = edges + `${pair[0]}-${pair[1]},`;
      } else {
        edges = edges + `${pair[0]}-${pair[1]}`;
      }
    });

    let res = {
      start: parseInt(limits.start),
      goal: parseInt(limits.goal),
      edges: edges
    };

    console.log(res);
    console.log(JSON.stringify(res));

    fetch("https://obscure-sierra-80708.herokuapp.com/graph", {
      method: "PUT",
      body: JSON.stringify(res),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .catch((err) => console.log("Error:", err))
      .then((res) => console.log("Yei", res));
  };

  return (
    <>
      <div className="graph__container">
        <h2 className="graph__title">Grafos</h2>

        <div className="graph-forms__container">
          <FormTwo
            input1="Nodo inicial"
            name1="start"
            input2="Nodo objetivo"
            name2="goal"
            button="Guardar parámetros"
            limits={limits}
            setLimits={setLimits}
          ></FormTwo>

          <FormTwo
            input1="Desde el nodo"
            name1="from"
            input2="Hacia el nodo"
            name2="to"
            button="Agregar conexión"
            pairs={pairs}
            setPairs={setPairs}
          ></FormTwo>
        </div>

        {limits.start && (
          <div className="graph-forms__table">
            <GraphTable
              titles={titles1}
              limits={limits}
              setLimits={setLimits}
            ></GraphTable>
          </div>
        )}

        {pairs.length >= 1 && (
          <div className="graph-forms__table">
            <GraphTable
              titles={titles2}
              pairs={pairs}
              setPairs={setPairs}
              deleteElement={deleteElement}
            ></GraphTable>
          </div>
        )}

        {limits.start && pairs.length >= 1 && (
          <div className="send__button">
            <Button
              variant="contained"
              color="secondary"
              onClick={sendToBackend}
            >
              Encontrar camino!
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Graphs;

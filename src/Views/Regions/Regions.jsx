import React, { useState } from "react";
import "./Regions.css";

/* Importamos los formularios */
import FormTwo from "./../../Components/Forms/FormTwo/FormTwo";
import FormOne from "./../../Components/Forms/FormOne/FormOne";
import RegTables from "./../../Components/Tables/RegTables/RegTables";
import Button from "@material-ui/core/Button";
import TransitionsModal from "../../Components/Modal/Modal";

import putApi from "./../../Hooks/putApi";

const Regions = () => {
  const [nodes, setNodes] = useState([]);
  const [pairs, setPairs] = useState([]);

  const titles1 = ["Nodo", ""];
  const titles2 = ["Desde", "Hacia"];

  const deleteElement = (key, type) => {
    if (type === "node") {
      setNodes(nodes.filter((node, index) => index !== key));
    } else {
      setPairs(pairs.filter((pair, index) => index !== key));
    }
  };

  const sendToBackend = () => {
    console.log("Holiwi");
    setLoading(true);
    setOpen(true);

    let res = {
      nodes: "",
      edges: ""
    };

    nodes.map((node) => {
      res.nodes = res.nodes.length ? res.nodes + `,${node}` : node;

      return 0;
    });

    pairs.map((pair) => {
      console.log(pair);
      res.edges = res.edges.length
        ? res.edges + `,${pair[0]}-${pair[1]}`
        : `${pair[0]}-${pair[1]}`;

      return 0;
    });

    console.log(res);
    console.log(JSON.stringify(res));

    putApi("sets", res, setLoading, setData);
  };

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="regions__container">
        <h2 className="regions__title">Regiones Conexas</h2>

        <div className="regions-forms__container">
          <FormOne
            input1="Nodo"
            button="Agregar nodo"
            nodes={nodes}
            setNodes={setNodes}
          ></FormOne>
          <FormTwo
            input1={titles2[0]}
            input2={titles2[1]}
            button="Agregar conexión"
            pairs={pairs}
            setPairs={setPairs}
          ></FormTwo>
        </div>

        <div className="tables__container">
          {nodes.length >= 1 && (
            <div className="bin-heap-forms__table">
              <RegTables
                titles={titles1}
                nodes={nodes}
                deleteElement={deleteElement}
              ></RegTables>
            </div>
          )}

          {pairs.length >= 1 && (
            <div className="bin-heap-forms__table">
              <RegTables
                titles={titles2}
                pairs={pairs}
                deleteElement={deleteElement}
              ></RegTables>
            </div>
          )}

          {nodes.length >= 1 && pairs.length >= 1 && (
            <div className="send__button">
              <Button
                variant="contained"
                color="secondary"
                onClick={sendToBackend}
              >
                Encontrar regiones conexas
              </Button>
            </div>
          )}
        </div>
      </div>

      {data && (
        <TransitionsModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          isLoading={loading}
          data={data}
          type="regions"
        ></TransitionsModal>
      )}
    </>
  );
};

export default Regions;

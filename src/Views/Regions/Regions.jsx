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
  const [edges, setEdges] = useState([]);

  const titles1 = ["Nodo", ""];
  const titles2 = ["Desde", "Hacia"];

  const deleteElement = (key, type) => {
    if (type === "nodes") {
      setNodes(nodes.filter((node, index) => index !== key));
    } else {
      setEdges(edges.filter((edge, index) => index !== key));
    }
  };

  const sendToBackend = () => {
    setLoading(true);
    setOpen(true);

    let res = {
      names: "",
      popularity: "",
      times_spoken: ""
    };

    nodes.map((person) => {
      res.names = res.names.length
        ? res.names + `,${person.name}`
        : person.name;

      res.popularity = res.popularity.length
        ? res.popularity + `,${person.popularity}`
        : person.popularity;

      res.times_spoken = res.times_spoken.length
        ? res.times_spoken + `,${person.times}`
        : person.times;
    });

    // console.log(res);
    // console.log(JSON.stringify(res));

    putApi("priority_queue", res, setLoading, setData);
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
          <FormOne input1="Nodo" button="Agregar nodo"></FormOne>
          <FormTwo
            input1={titles2[0]}
            input2={titles2[1]}
            button="Agregar conexión"
            nodes={nodes}
            setNodes={setNodes}
          ></FormTwo>
        </div>

        <div className="tables__container">
          {nodes.length >= 1 && (
            <div className="bin-heap-forms__table">
              <RegTables
                titles={titles2}
                info={nodes}
                deleteElement={deleteElement}
                isNodeList={true}
              ></RegTables>
            </div>
          )}

          {nodes.length >= 1 && (
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
      </div>

      {data && (
        <TransitionsModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          isLoading={loading}
          data={data}
          type="heap"
        ></TransitionsModal>
      )}
    </>
  );
};

export default Regions;

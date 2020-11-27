import React, { useState } from "react";
import "./Djikstra.css";

/* Importamos los formularios */
import FormTwo from "./../../Components/Forms/FormTwo/FormTwo";
import FormThree from "./../../Components/Forms/FormThree/FormThree";
import DjikstraTables from "./../../Components/Tables/DjikstraTables/DjikstraTables";
import Button from "@material-ui/core/Button";
import TransitionsModal from "../../Components/Modal/Modal";

import putApi from "../../Hooks/putApi";

const Djikstra = () => {
  const [pairs, setPairs] = useState([]);
  const [limits, setLimits] = useState({
    start: null,
    goal: null
  });

  const titles1 = ["Nodo inicial", "Nodo objetivo"];
  const titles2 = ["Desde el nodo", "Hacia el nodo", "Costo de la ruta"];

  const deleteElement = (key) => {
    setPairs(pairs.filter((arc, index) => index !== key));
  };

  const sendToBackend = () => {
    let edges = "";

    setLoading(true);
    setOpen(true);

    // console.log(limits);
    // console.log(pairs);

    pairs.map((pair, index) => {
      if (index + 1 !== pairs.length) {
        edges = edges + `${pair.from}-${pair.to}-${pair.cost},`;
      } else {
        edges = edges + `${pair.from}-${pair.to}-${pair.cost}`;
      }
      return 0;
    });

    let res = {
      start: parseInt(limits.start),
      goal: parseInt(limits.goal),
      edges: edges
    };

    // console.log(res);
    // console.log(JSON.stringify(res));

    putApi("djikstra", res, setLoading, setData);
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
      <div className="graph__container">
        <h2 className="graph__title">Djikstra</h2>

        <div className="graph-forms__container">
          <FormTwo
            input1={titles1[0]}
            input2={titles2[0]}
            button="Guardar parámetros"
            limits={limits}
            setLimits={setLimits}
            isLimit={true}
          ></FormTwo>

          <FormThree
            input1={titles2[0]}
            input2={titles2[1]}
            input3={titles2[2]}
            button="Agregar conexión"
            pairs={pairs}
            setPairs={setPairs}
            isDjikstra={true}
          ></FormThree>
        </div>

        <div className="tables__container">
          {limits.start && (
            <div className="graph-forms__table">
              <DjikstraTables
                titles={titles1}
                limits={limits}
                setLimits={setLimits}
              ></DjikstraTables>
            </div>
          )}

          {pairs.length >= 1 && (
            <div className="graph-forms__table">
              <DjikstraTables
                titles={titles2}
                pairs={pairs}
                setPairs={setPairs}
                deleteElement={deleteElement}
              ></DjikstraTables>
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
      </div>

      <TransitionsModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        isLoading={loading}
        data={data}
        type="djikstra"
      ></TransitionsModal>
    </>
  );
};

export default Djikstra;

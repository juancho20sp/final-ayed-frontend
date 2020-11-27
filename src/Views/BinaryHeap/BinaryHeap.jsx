import React, { useState } from "react";
import "./BinaryHeap.css";

/* Importamos los formularios */
import FormThree from "./../../Components/Forms/FormThree/FormThree";
import BinHeapTables from "./../../Components/Tables/BinHeapTables/BinHeapTables";
import Button from "@material-ui/core/Button";
import TransitionsModal from "../../Components/Modal/Modal";

import putApi from "./../../Hooks/putApi";

const BinaryHeap = () => {
  const [info, setInfo] = useState([]);

  const titles = [
    "Nombre",
    "Índice de popularidad",
    "Número de contactos / semana",
    ""
  ];

  const deleteElement = (key) => {
    setInfo(info.filter((person, index) => index !== key));
  };

  const sendToBackend = () => {
    setLoading(true);
    setOpen(true);

    let res = {
      names: "",
      popularity: "",
      times_spoken: ""
    };

    info.map((person) => {
      res.names = res.names.length
        ? res.names + `,${person.name}`
        : person.name;

      res.popularity = res.popularity.length
        ? res.popularity + `,${person.popularity}`
        : person.popularity;

      res.times_spoken = res.times_spoken.length
        ? res.times_spoken + `,${person.times}`
        : person.times;

      return 0;

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
      <div className="bin-heap__container">
        <h2 className="bin-heap__title">Montón binario</h2>

        <div className="bin-heap-forms__container">
          <FormThree
            input1={titles[0]}
            input2={titles[1]}
            input3={titles[2]}
            button="Agregar persona"
            info={info}
            setInfo={setInfo}
          ></FormThree>
        </div>

        <div className="tables__container">
          {info.length >= 1 && (
            <div className="bin-heap-forms__table">
              <BinHeapTables
                titles={titles}
                info={info}
                deleteElement={deleteElement}
              ></BinHeapTables>
            </div>
          )}

          {info.length >= 1 && (
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

export default BinaryHeap;

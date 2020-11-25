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

  React.useEffect(() => {
    console.log(info);
  }, [info]);

  const titles = [
    "Nombre",
    "Índice de popularidad",
    "Número de contactos / semana",
    ""
  ];

  const names = ["names", "popularity", "times_spoken"];

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
        ? res.names + `,${person.names}`
        : person.names;

      res.popularity = res.popularity.length
        ? res.popularity + `,${person.popularity}`
        : person.popularity;

      res.times_spoken = res.times_spoken.length
        ? res.times_spoken + `,${person.times_spoken}`
        : person.times_spoken;
    });

    console.log(res);
    console.log(JSON.stringify(res));

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
      <div className="graph__container">
        <h2 className="graph__title">Montón binario</h2>

        <div className="graph-forms__container">
          <FormThree
            input1={titles[0]}
            name1={names[0]}
            input2={titles[1]}
            name2={names[1]}
            input3={titles[2]}
            name3={names[2]}
            button="Agregar persona"
            info={info}
            setInfo={setInfo}
          ></FormThree>
        </div>

        <div className="tables__container">
          {info.length >= 1 && (
            <div className="graph-forms__table">
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

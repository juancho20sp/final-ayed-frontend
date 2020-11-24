import React from "react";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Modal.css";

const TransitionsModal = (props) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.open}>
          <div className="modal__fade">
            <h2 id="transition-modal-title">Transition modal</h2>
            {props.isLoading && <CircularProgress></CircularProgress>}

            {!props.isLoading &&
              (console.log(props.data),
              (
                <p id="transition-modal-description">{`¡Estás a ${props.data.distance}
            personas de llegar a tu crush! La ruta que debes seguir es: ${props.data.nodes}`}</p>
              ))}

            <Button
              variant="contained"
              color="secondary"
              onClick={props.handleClose}
            >
              Holiwi
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;

import React from "react";
import "./FormOne.css";
import { useForm } from "react-hook-form";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormOne = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const node = data.field1;

    if (!props.nodes.includes(node)) {
      props.setNodes([...props.nodes, node]);
    }
  };

  const input1 = props.input1;

  return (
    <form className="form-one" onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Nombre */}
      <div className="form-one-slots__container">
        <div className="form-one__container">
          <TextField
            fullWidth={true}
            variant="outlined"
            label={input1}
            placeholder={input1}
            name="field1"
            inputRef={register({
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 1
            })}
          ></TextField>

          <span className="form__error">
            {errors.field1 && errors.field1.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.field1 && errors.field1.type === "pattern" && (
              <p>El valor ingresado debe ser numérico</p>
            )}
          </span>
        </div>
      </div>

      <div className="button__container">
        <Button variant="contained" color="primary" type="submit">
          {props.button}
        </Button>
      </div>
    </form>
  );
};

export default FormOne;

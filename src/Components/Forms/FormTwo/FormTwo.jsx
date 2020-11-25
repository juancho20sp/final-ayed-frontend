import React from "react";
import "./FormTwo.css";
import { useForm } from "react-hook-form";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormTwo = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    if (props.isLimit) {
      props.setLimits({
        start: data.start,
        goal: data.goal
      });
    } else {
      props.setPairs([...props.pairs, [data.from, data.to]]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Nodo de inicio */}
      <div className="form-two__container">
        <div className="form-start__container">
          <TextField
            variant="outlined"
            label={props.input1}
            placeholder="0"
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

        {/* Nodo de objetivo */}
        <div className="form-goal__container">
          <TextField
            variant="outlined"
            label={props.input2}
            placeholder="0"
            name="field2"
            inputRef={register({
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 1
            })}
          ></TextField>

          <span className="form__error">
            {errors.field2 && errors.field2.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.field2 && errors.field2.type === "pattern" && (
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

export default FormTwo;

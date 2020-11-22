import React from "react";
import "./FormTwo.css";
import { useForm } from "react-hook-form";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormTwo = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    if (data.hasOwnProperty("start") || data.hasOwnProperty("goal")) {
      props.setLimits({
        start: data.start,
        goal: data.goal
      });
    }

    if (data.hasOwnProperty("from") || data.hasOwnProperty("to")) {
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
            name={props.name1}
            inputRef={register({
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 1
            })}
          ></TextField>

          <span className="form__error">
            {errors.start && errors.start.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.start && errors.start.type === "pattern" && (
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
            name={props.name2}
            inputRef={register({
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 1
            })}
          ></TextField>

          <span className="form__error">
            {errors.goal && errors.goal.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.goal && errors.goal.type === "pattern" && (
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

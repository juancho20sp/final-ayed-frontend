import React from "react";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

import Input from "@material-ui/core/Input";

const FormTwo = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Nodo de inicio */}

        <Input
          placeholder="0"
          id="start"
          ref={register({ required: true, pattern: /^[0-9]+$/, minLength: 1 })}
        ></Input>

        {errors.start && errors.start.type === "required" && (
          <p>Este campo es obligatorio</p>
        )}
        {errors.start && errors.start.type === "pattern" && (
          <p>El valor ingresado debe ser numérico</p>
        )}
        {/* Nodo de inicio */}
        <label htmlFor="goal">Nodo objetivo:</label>
        <input
          name="goal"
          type="text"
          placeholder="0"
          ref={register({ required: true, pattern: /^[0-9]+$/, minLength: 1 })}
        />
        {errors.goal && errors.goal.type === "required" && (
          <p>Este campo es obligatorio</p>
        )}
        {errors.goal && errors.goal.type === "pattern" && (
          <p>El valor ingresado debe ser numérico</p>
        )}
        <Button variant="contained" color="primary" type="submit">
          Holiwi
        </Button>
      </form>
    </div>
  );
};

export default FormTwo;

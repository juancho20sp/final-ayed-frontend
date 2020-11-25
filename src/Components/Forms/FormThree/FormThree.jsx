import React from "react";
import "./FormThree.css";
import { useForm } from "react-hook-form";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormThree = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    /*const newNames = props.info.names.length
      ? props.info.names + `,${data.names}`
      : data.names;

    const newPopularity = props.info.popularity.length
      ? props.info.popularity + `,${data.popularity}`
      : data.popularity;

    const newTimes = props.info.times_spoken.length
      ? props.info.times_spoken + `,${data.times_spoken}`
      : data.times_spoken;*/

    props.setInfo([...props.info, data]);
  };

  const input1 = props.input1;
  const input2 = props.input2;
  const input3 = props.input3;

  const name1 = props.name1;
  const name2 = props.name2;
  const name3 = props.name3;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Nombre */}
      <div className="form-three-slots__container">
        <div className="form-one__container">
          <TextField
            variant="outlined"
            label={input1}
            placeholder={input1}
            name={name1}
            inputRef={register({
              required: true,
              pattern: /^[A-Za-z]+$/,
              minLength: 2
            })}
          ></TextField>

          <span className="form__error">
            {errors.name1 && errors.name1.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.name1 && errors.name1.type === "pattern" && (
              <p>
                El valor ingresado no puede contener carácteres especiales ni
                números
              </p>
            )}
          </span>
        </div>

        {/* Popularidad */}
        <div className="form-two__container">
          <TextField
            variant="outlined"
            label={input2}
            placeholder={input2}
            name={name2}
            inputRef={register({
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 1
            })}
          ></TextField>

          <span className="form__error">
            {errors.name2 && errors.name2.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.name2 && errors.name2.type === "pattern" && (
              <p>El valor ingresado debe ser numérico</p>
            )}
          </span>
        </div>

        {/* Número de contactos */}
        <div className="form-three__container">
          <TextField
            variant="outlined"
            label={input3}
            placeholder={input3}
            name={name3}
            inputRef={register({
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 1
            })}
          ></TextField>

          <span className="form__error">
            {errors.name3 && errors.name3.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.name3 && errors.name3.type === "pattern" && (
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

export default FormThree;

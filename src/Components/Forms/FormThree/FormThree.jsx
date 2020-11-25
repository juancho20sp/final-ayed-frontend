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
    <form className="form-three" onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Nombre */}
      <div className="form-three-slots__container">
        <div className="form-one__container">
          <TextField
            fullWidth={true}
            variant="outlined"
            label={input1}
            placeholder={input1}
            name="name"
            inputRef={register({
              required: true,
              pattern: /^[A-Za-z]+$/,
              minLength: 2
            })}
          ></TextField>

          <span className="form__error">
            {errors.name && errors.name.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.name && errors.name.type === "pattern" && (
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
            fullWidth={true}
            variant="outlined"
            label={input2}
            placeholder={input2}
            name="popularity"
            inputRef={register({
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 1
            })}
          ></TextField>

          <span className="form__error">
            {errors.popularity && errors.popularity.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.popularity && errors.popularity.type === "pattern" && (
              <p>El valor ingresado debe ser numérico</p>
            )}
          </span>
        </div>

        {/* Número de contactos */}
        <div className="form-three__container">
          <TextField
            fullWidth={true}
            variant="outlined"
            label={input3}
            placeholder={input3}
            name="times"
            inputRef={register({
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 1
            })}
          ></TextField>

          <span className="form__error">
            {errors.times && errors.times.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.times && errors.times.type === "pattern" && (
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

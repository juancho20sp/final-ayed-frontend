import React from "react";
import "./FormThree.css";
import { useForm } from "react-hook-form";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormThree = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (props.isDjikstra) {
      const temp = {
        from: data.field1,
        to: data.field2,
        cost: data.field3
      };

      props.setPairs([...props.pairs, temp]);
      console.log(props.pairs);
    } else {
      /*const newNames = props.info.names.length
      ? props.info.names + `,${data.names}`
      : data.names;

    const newPopularity = props.info.popularity.length
      ? props.info.popularity + `,${data.popularity}`
      : data.popularity;

    const newTimes = props.info.times_spoken.length
      ? props.info.times_spoken + `,${data.times_spoken}`
      : data.times_spoken;*/

      const temp = {
        name: data.field1,
        popularity: data.field2,
        times: data.field3
      };

      props.setInfo([...props.info, temp]);
    }
  };

  const input1 = props.input1;
  const input2 = props.input2;
  const input3 = props.input3;

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
            name="field1"
            inputRef={register({
              required: true,
              pattern: /^[A-Za-z0-9]+$/,
              minLength: 1
            })}
          ></TextField>

          {props.isDjikstra && (
            <span className="form__error">
              {errors.field1 && errors.field1.type === "required" && (
                <p>Este campo es obligatorio</p>
              )}
              {errors.field1 && errors.field1.type === "pattern" && (
                <p>El valor ingresado debe ser numérico</p>
              )}
            </span>
          )}

          {!props.isDjikstra && (
            <span className="form__error">
              {errors.field1 && errors.field1.type === "required" && (
                <p>Este campo es obligatorio</p>
              )}
              {errors.field1 && errors.field1.type === "pattern" && (
                <p>
                  El valor ingresado no puede contener carácteres especiales ni
                  números
                </p>
              )}
            </span>
          )}
        </div>

        {/* Popularidad */}
        <div className="form-two__container">
          <TextField
            fullWidth={true}
            variant="outlined"
            label={input2}
            placeholder={input2}
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

        {/* Número de contactos */}
        <div className="form-three__container">
          <TextField
            fullWidth={true}
            variant="outlined"
            label={input3}
            placeholder={input3}
            name="field3"
            inputRef={register({
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 1
            })}
          ></TextField>

          <span className="form__error">
            {errors.field3 && errors.field3.type === "required" && (
              <p>Este campo es obligatorio</p>
            )}
            {errors.field3 && errors.field3.type === "pattern" && (
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

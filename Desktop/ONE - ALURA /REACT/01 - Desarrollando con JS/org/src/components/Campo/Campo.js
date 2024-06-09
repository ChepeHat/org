import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
  // Se crea una constante para modificar un prop (ej: se agregan ...)
  const placeholderModificado = `${props.placeholder}...`;

  // Destructuracion
  const { type = 'text' } = props

  console.log(type);
  
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)
  }

  return (
    <div className={`campo campo-${type}`}>
      {/* "Props" son propiedades externas que recibe un componente de React. En este caso hacen referencia a los elementos en el Formulario.js */}
    <label>{props.titulo}</label>
      {/* Se sustituye props.placeholder por la constante que alberga la modificación */}
    <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;

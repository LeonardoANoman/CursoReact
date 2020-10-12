import React from "react";

export default (props) => {
  return (
    <div>
      <div>{props.texto}</div>
      <div>
        <strong>{props.numero}</strong>
      </div>
      <div>{props.feio ? "Verdadeiro" : "Falso"}!</div>
    </div>
  );
};

import React from "react";

export default (props) => {
  const { valorMinimo, valorMaximo } = props;
  const generated =
    parseInt(Math.random() * (valorMaximo - valorMinimo)) + valorMinimo;
  return (
    <div>
      <h2> Valor Aleatório </h2>
      <p>
        <strong>Valor Mínimo: </strong>
        {valorMinimo}{" "}
      </p>
      <p>
        <strong>Valor Máximo: </strong>
        {valorMaximo}
      </p>
      <p>
        <strong>Valor Sorteado: </strong>
        {generated}
      </p>
    </div>
  );
};

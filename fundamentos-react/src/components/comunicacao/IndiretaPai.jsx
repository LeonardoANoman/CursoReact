import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  let nome = "?";
  let idade = 0;
  let feio = false;

  function fornecerInformacoes(nomeParam, idadeParam, feioParam) {
    nome = nomeParam;
    idade = idadeParam;
    feio = feioParam;

    console.log(nomeParam, idadeParam, nerdParam);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade}</strong>
        </span>
        <span> {feio ? "Verdadeiro" : "Falso"}!</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};

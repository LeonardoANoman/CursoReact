import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [feio, setFeio] = useState(false);

  function fornecerInfomacoes(nome, idade, feio) {
    setNome(nome);
    setIdade(idade);
    setFeio(feio);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade}</strong>
        </span>
        <span> {feio ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInfomacoes}></IndiretaFilho>
    </div>
  );
};

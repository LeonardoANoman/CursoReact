import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <Card titulo="#11 - Componente Controlado (Input)" cor="#B2B">
      <Input></Input>
    </Card>

    <Card titulo="#10 - Comunicação Indireta" cor="#684">
      <IndiretaPai></IndiretaPai>
    </Card>

    <Card titulo="#09 - Comunicação Direta" cor="#666">
      <DiretaPai></DiretaPai>
    </Card>

    <Card titulo="#08 - Renderização Condicional" cor="#628">
      <ParOuImpar numero={20}></ParOuImpar>
      <UsuarioInfo usuario={{ nome: "Leonardo" }} />
      <UsuarioInfo usuario={{}} />
    </Card>

    <Card titulo="#07 - Tabela de Produtos" cor="#864">
      <TabelaProdutos></TabelaProdutos>
    </Card>

    <Card titulo="#06 - Repetição" cor="#848">
      <ListaAlunos></ListaAlunos>
    </Card>

    <div className="Cards">
      <Card titulo="#05 - Componente com Filhos" cor="#448">
        <Familia sobrenome="Antunes">
          <FamiliaMembro nome="Leonardo" />
          <FamiliaMembro nome="Maria" />
          {/* <FamiliaMembro nome="Maria" /> */}
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" cor="#008">
        <NumeroAleatorio valorMinimo={1} valorMaximo={1000} />
      </Card>

      <Card titulo="#03 - Fragmento" cor="#088">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" cor="888">
        <ComParametro aluno="Pedro" nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro" cor="#080">
        <Primeiro />
      </Card>
    </div>
  </div>
);

import './App.css'
import React from 'react';


import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'

export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

        <Card titulo="#05 - Componente com Filhos" cor="#448">
            <Familia sobrenome="Antunes"/>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" cor="#008">
        <NumeroAleatorio valorMinimo={1} valorMaximo={1000} />
        </Card>

        <Card titulo="#03 - Fragmento" cor="#088">
        <Fragmento/>
        </Card>

        <Card titulo="#02 - Com Parâmetro" cor="888">
        <ComParametro aluno="Pedro" nota={9.3} />
        </Card>

        <Card titulo="#01 - Primeiro" cor="#080">        
        <Primeiro />
        </Card>

        </div>
    </div>

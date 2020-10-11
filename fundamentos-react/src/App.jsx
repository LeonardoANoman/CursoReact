import React from 'react';


import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Card from './components/layout/Card'

export default () =>
    <div id="App">
        <h1>Fundamentos React</h1>

        <Card titulo="#04 - Desafio Aleatório">
        <NumeroAleatorio valorMinimo={1} valorMaximo={1000} />
        </Card>

        <Card titulo="#03 - Fragmento">
        <Fragmento/>
        </Card>

        <Card titulo="#02 - Com Parâmetro">
        <ComParametro aluno="Pedro" nota={9.3} />
        </Card>

        <Card titulo="#01 - Primeiro">        
        <Primeiro />
        </Card>


    </div>

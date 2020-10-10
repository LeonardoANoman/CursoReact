import React from 'react';


import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'

export default () =>
    <div id="App">
        <h1>Fundamentos React</h1>

        <NumeroAleatorio valorMinimo={1} valorMaximo={1000} />
        <Fragmento />
        <ComParametro aluno="Pedro" nota={9.3} />
        <Primeiro />

    </div>

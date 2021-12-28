import React from 'react'
import ReactDOM from 'react-dom'

// ReactDOM.render(<h1>React</h1>, document.getElementById('root'))    OU
// const elemento = <h1>React 2</h1>
// ReactDOM.render(elemento, document.getElementById('root'))

// import BomDia from './componentes/BomDia'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" />
    </div>,
 document.getElementById('root'))
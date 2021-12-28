import React, { Fragment } from "react"

export default props =>
    <div>
        <h1>Bom Dia {props.nome}!</h1>
        <h2>Até Breve!</h2>
    </div>
// OU
    // <React.Fragment>
    //     <h1>Bom Dia {props.nome}!</h1>
    //     <h2>Até Breve!</h2>
    // </React.Fragment>
// OU importando React, { Fragment }
    // <Fragment> 
    //     <h1>Bom Dia {props.nome}!</h1>
    //     <h2>Até Breve!</h2>
    // </Fragment>
// OU como array
    // [
    //     <h1 key='h1'>Bom Dia {props.nome}!</h1>,
    //     <h2 key='h2'>Até Breve!</h2>
    // ]
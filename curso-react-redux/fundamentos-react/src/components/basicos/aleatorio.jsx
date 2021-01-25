import React from 'react'

export default (props) => {
    const valorAleatorio = parseInt(Math.random() * (props.max - props.min) + props.min) 
    const { min, max } = props;
    return (
        <div>
           <p>Valor minimo: { min }</p>
           <p>Valor maximo: { max }</p>
           <span><strong>Valor sorteado: { valorAleatorio }</strong></span>
        </div>
    )
}
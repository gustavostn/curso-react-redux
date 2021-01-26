import React, { useState } from 'react'
import IndiretaFilho from './indiretaFilho'

export default props => {

    const [nome, setNome] = useState(null)
    const [idade, setIdade] = useState(null)
    const [nerd, setNerd] = useState(null)

    function recebeInfo(nome,idade,nerd){
        const nerdFormatado = nerd == true ? 'Sim' : 'Não'
        setNome(nome)
        setIdade(idade)
        setNerd(nerdFormatado)
    }


    return (
        <div>
            <span>Dados pai:</span> <br />
            <span>Nome: { nome } | Idade: { idade } | Nerd: { nerd } </span>
            <IndiretaFilho setInfo={recebeInfo}/>
        </div>
    )
}
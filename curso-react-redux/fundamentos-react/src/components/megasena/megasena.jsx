import React, {useState} from 'react'

export default props => {

    function gerarNumero(qtde){
        const numeros = Array(qtde)
         .fill(0)
         .reduce((nums) => { 
             const novoNumero = gerarNovoNumero(nums)
             return [...nums, novoNumero]
         }, [])  
         .sort((n1, n2) => n1 - n2)
         return numeros
     }
     
     function gerarNovoNumero(array){
         const aleatorio = parseInt(Math.random() * (100 - 0)) + 0
         return array.includes(aleatorio) ? gerarNovoNumero(array) : aleatorio
     }

     const [ qtde,setQtde ] = useState(props.qtde || 1)
     const numerosIniciais = gerarNumero(qtde)
     const [ numeros, setNumeros ] = useState(numerosIniciais) 

    return (
        <div>
            <h3>Megasena</h3>
            <span>{numeros.join(' ')}</span>
            <div>
                <label>Quantidade de numero</label>
                <br />
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumeros(gerarNumero(qtde))}>Sortear numeros</button>
        </div>
    )
}
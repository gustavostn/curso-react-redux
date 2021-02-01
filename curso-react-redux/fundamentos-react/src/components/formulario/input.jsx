import {useState} from 'react'
import './input.css'


export default props => {

    const [valor, setValor] = useState('Inicial')

    function change(e) {
        setValor(e.target.value) //Irá atualizar o valor do input
    }


    return (
        <div className="input">
            <input value={ valor } onChange={change}/>
            <br />
            <span> Valor digitado: { valor }</span>
            <br /><br />
            <input value={ 'readOnly' } readOnly style={{ backgroundColor: '#d1d1d1'}}/>
            <input value={ undefined } />
        </div>
    )
}
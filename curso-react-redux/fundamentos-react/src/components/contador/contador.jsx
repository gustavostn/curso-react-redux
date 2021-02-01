import { Component } from 'react'
import './contador.css'
import Display from './display'
import Botoes from './botoes'
import QuantPasso from './quantPasso'


class Contador extends Component {

    state = {
        numero: this.props.valorInicial || 0, //pegando o valor passando
        passo: this.props.quantCasas || 4
    }

    aumentaValor = () => { //por ser uma func arrow o this sempre ira apontar p/ instancia da classe
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    
    diminuiValor = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render(){
        return (
            <div>
                <h3>Contador</h3>
                <Display numero={ this.state.numero }/> 
                <QuantPasso passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes incremento={this.aumentaValor} decremento={this.diminuiValor}/>
            </div>
        )
    }
}


export default Contador
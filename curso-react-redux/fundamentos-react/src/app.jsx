import './app.css'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/comParametro'
import Fragmento from './components/basicos/fragmento'
import Aleatorio from './components/basicos/aleatorio'
import Card from './components/layout/card'

export default () => 
        <div> 
            <h1>Fundamento React </h1>
            <div className="cards">

                <Card titulo="Sorteando numeros aleatorios">
                    <Aleatorio max={67} min={7}/>
                </Card>
                
                <Card titulo="Retornando elementos sem <div>">
                    <Fragmento />
                </Card>
                
                <Card titulo="Passando parametros para o componente">
                    <ComParametro nome="Marcela" nota={8.75} sexo="F"/> 
                </Card>
                
                <Card titulo="Passando parametros para o componente 2">
                    <ComParametro nome="Gustavo" nota={6.90} sexo="M"/> 
                </Card>
                
                <Card titulo="Aprendendo a criar um componente">
                    <Primeiro/>
                </Card>
            </div>
            
        </div>

import './app.css'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/comParametro'
import Fragmento from './components/basicos/fragmento'
import Aleatorio from './components/basicos/aleatorio'
import Card from './components/layout/card'
import Familia from './components/basicos/familia'
import FamiliaMembro from './components/basicos/familiaMembro'
import ListaAlunos from './components/repeticao/listaAluno'
import TabelaProdutos from './components/repeticao/tabelaProdutos'
import ParOuImpar from './components/condicional/parOuImpar'
import UsuarioInfo from './components/condicional/usuarioInfo'
import DiretaPai from './components/comunicacao/diretaPai'
import IndiretaPai from './components/comunicacao/indiretaPai'
import Input from './components/formulario/input'
import Contador from './components/contador/contador'
import Megasena from './components/megasena/megasena'

export default () => 
        <div> 
            <h1>Fundamento React </h1>
            <div className="cards">

                <Card titulo="Contador" color="#119">
                    <Megasena  />
                </Card>
               
                <Card titulo="Contador" color="#9FA">
                    <Contador valorInicial={0} passo={3}  />
                </Card>
                
                <Card titulo="Componente controlado" color="#E65A">
                    <Input />
                </Card>

                <Card titulo="Comunicação indireta" color="#A1A">
                    <IndiretaPai />
                </Card>
                
                <Card titulo="Comunicação direta" color="#56300F">
                    <DiretaPai />
                </Card>
                
                <Card titulo="Renderização condicional #2" color="#315AFC">
                    <UsuarioInfo usuario={{nome: 'Gustavo', sexo: 'M'}} />
                </Card>
                

                <Card titulo="Renderização condicional" color="#3995AC">
                    <ParOuImpar numero={33}/>
                </Card>
                
                <Card titulo="Tabela de produtos - Repetição" color="#AA3246">
                    <TabelaProdutos />
                </Card>
                
                <Card titulo="Lista de alunos - Repetição" color="#FFC700">
                    <ListaAlunos />
                </Card>

                <Card titulo="Componente com filhos" color="#498">
                    <Familia sobrenome="Almeida">
                        <FamiliaMembro nome="Gustavo"/>
                        {/* <FamiliaMembro nome="Bruna"/>
                        <FamiliaMembro nome="Marcio"/> */}
                    </Familia>
                </Card>
                
                <Card titulo="Sorteando numeros aleatorios" color="#A21">
                    <Aleatorio max={67} min={7}/>
                </Card>
                
                <Card titulo="Retornando elementos sem <div>" color="#b998"> 
                    <Fragmento />
                </Card>
                
                <Card titulo="Passando parametros para o componente" color="#01F">
                    <ComParametro nome="Marcela" nota={8.75} sexo="F"/> 
                </Card>
                
                <Card titulo="Passando parametros para o componente 2" color="#104F">
                    <ComParametro nome="Gustavo" nota={6.90} sexo="M"/> 
                </Card>
                
                <Card titulo="Aprendendo a criar um componente" color="#666">
                    <Primeiro/>
                </Card>
            </div>
            
        </div>

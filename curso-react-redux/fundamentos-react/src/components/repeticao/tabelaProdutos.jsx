import Produtos from '../../data/produtos'
import './tabelaProdutos.css'

export default (props) => {

    function formataValor(valor){
       return  valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",") 
    }


   function retornaProdutos(){
        return Produtos.map((produto, i) => {
            return (
                <tr key={ produto.id} className={ i % 2 == 0 ? 'par' : ''}>
                    <td> { produto.id } </td>
                    <td> { produto.nome } </td>
                    <td> { formataValor(produto.preco) } </td>
                </tr>
                )
    })
}
    
    return (
        <div className="tabelaPrdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                        { retornaProdutos() }
                </tbody>
            </table>
        </div>
    )
}
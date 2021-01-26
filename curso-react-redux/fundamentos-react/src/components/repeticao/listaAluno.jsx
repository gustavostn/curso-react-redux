import alunos from '../../data/alunos'

export default (props) => {

    // acessando o meu array e caminhando em cada linha dele e selecionando as informações
    //key = tem que ser uma chave unica
    const dados = alunos.map( aluno => {
        return <li key={aluno.id}> { aluno.id }) { aluno.nome } - { aluno.nota }</li>
    })


    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                { dados }
            </ul>
        </div>
    )
}
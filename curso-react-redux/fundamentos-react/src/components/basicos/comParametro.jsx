// export default function(props){
//     const subtitulo = props.subtitulo
//     console.log(props);
//     return (
//         <div>
//             <h2> {props.titulo} </h2>
//             <h3> { subtitulo } </h3>
//         </div>
//     )
// }

export default function mostraNota(props){
    const sexo = props.sexo
    const defineSexo = (sexo === "M") ? 'O aluno' : 'A aluna'

    return (
        <div>
            <span> { defineSexo } <strong> { props.nome } </strong>   tirou a nota {props.nota} </span>
        </div>
    )
}
import './card.css'

export default (props) => {
    const estilo = { 
        backgroundColor: props.color || '#F67',
        borderColor: props.color || '#F67'
    }
    return (
        <div className="card" style={estilo}>
           <div className="titulo"> {props.titulo}</div>
           <div className="conteudo"> 
                {props.children}
            </div>
        </div>
    )
}


export default props => {

    const geradorDeIdade = () => parseInt(Math.random() * (25)) + 70
    const geradorDeNerd = () => Math.random() >= 0.5
  
    return (
        <div>
            <br />
            <div>
                Filho
            </div>
            <button onClick={()=>props.setInfo('Magal', geradorDeIdade(), geradorDeNerd())}> Fornecer informações </button>
        </div> 
    )
}
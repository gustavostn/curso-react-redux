export default props => {
    return (
        <div className="contador">
        <label htmlFor="passoInput">Passo: </label>
        <input id="passoInput" type="number" value={props.passo} onChange={e => props.setPasso(+e.target.value)}/>
    </div>
    )
}
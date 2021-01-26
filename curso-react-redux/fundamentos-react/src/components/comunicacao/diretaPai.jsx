import DiretaFiho from './diretaFilho'

export default props =>{
    return (
        <div>
            <DiretaFiho texto="Gustavo" numero={20} bool={true} />
            <DiretaFiho texto="Matheus" numero={24} bool={false} />
        </div>
    )
}
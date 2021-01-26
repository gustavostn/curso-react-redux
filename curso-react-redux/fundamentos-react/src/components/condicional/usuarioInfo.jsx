import If, { Else } from './mostraVerdadeiro'

export default props => {
    const sexo = props.usuario.sexo ? true : false
    const sexoMsg =  props.usuario.sexo == "M" ? 'vindo' : 'vinda';

    console.log(props);
    return (
        <div>
            <If test={ sexoMsg && props.usuario.sexo }>
                <div>
                    Seja bem { sexoMsg } <strong>{ props.usuario.nome }</strong>!
                </div>
                <Else>
                    <div>
                        <span> Olá <strong>{ props.usuario.nome }</strong></span>
                    </div>
                </Else>
            </If>
        </div>

    )
}
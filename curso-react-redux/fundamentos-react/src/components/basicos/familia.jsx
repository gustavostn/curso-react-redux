import {cloneElement, Children} from 'react'


export default (props) => {
    return (    
        <div>
            {
                // pegando todos os filhos -> selecionando apenas 1 -> retornando o filho com o props
                Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            }
            {/* {cloneElement(props.children, { ...props })} -> Apenas um valor */}
           {/*  { props.children }  Recebendo as infos dentro da tag no app*/}
        </div>
    )
}
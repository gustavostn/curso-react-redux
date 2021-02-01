function gerarNumero(qtde){
   const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => { 
        const novoNumero = gerarNovoNumero(nums)
        // console.log([...nums, novoNumero])
        return [...nums, novoNumero]
    }, [])  
    .sort((n1, n2) => n1 - n2)
    return numeros
}

function gerarNovoNumero(array){
    const aleatorio = parseInt(Math.random() * (100 - 0)) + 0
    return array.includes(aleatorio) ? gerarNovoNumero(array) : aleatorio
}

console.log(gerarNumero(7));

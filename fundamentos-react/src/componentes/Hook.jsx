import React, {useState, useEffect} from 'react'
//useEffect serve para atualizar o "ciclo de vida" do componente
//useState serve para trabalhar com componentes funcionais usando estado

export default props => {
    // const [x, y] é um operador de desestruturação
    const[contador, setContador] = useState(100)
    const[parOuImpar,  setParOuImpar] = useState('Par')

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar ('Impar')

    })

    return(
        <div>
            <h1>{contador}</h1>
            <h1>{parOuImpar}</h1>
            <button onClick={() => setContador(contador + 1)}> Inc </button>
            <button onClick={() => setContador(contador - 1)}> Dec </button>
        </div>
    )
}
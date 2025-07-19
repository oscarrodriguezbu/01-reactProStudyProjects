import { useState } from 'react'

interface Props {
    initialValue?: number
}

export const Counter = ({ initialValue = 0 }: Props) => { //se desustructura los props, el tipado se hace de forma implicita
    //initialValue:number esto no funciona porque eso no tipa, por lo contrario renombra cuando se está desestructurando
    //Props se encarga de colocarle el tipo

    const [counter, setCounter] = useState(initialValue)

    const handleClick = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <>
            <h1>Counter: {counter}</h1>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}

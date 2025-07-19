import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null); // en este caso mantiene la referencia a un elemento html, 
    // el tipo HTMLHeadingElement es propio de typescript y toca inicializarlo al menos en null


    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));//solucion sencilla usando Math para validar el valor maximo
    }

    useEffect(() => {

        if (counter < 10) return;

        //console log estilizado
        console.log('%cSe llego al valor máximo', 'color: red; background-color: black;')

        const tl = gsap.timeline();// es para animar el numero cuando llegue al limite

        tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' }) //es mala practica apuntar a una clase o etiqueta, es mejor hacerlo por referencia
            //se puede manejar como promesas para continuar, por ejemplo .then(()=>{}) pero se recomienda usar el timeline en lugar de la promesas
            .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })


        //*HAY UN PROBLEMA CON EL TIMELINE, EL CUAL TIENE CONFLICTO SI SE USA EN MAS DE UN ELEMENTO HTML, PARA ESO SE USA EN CUSTOMHOOK

    }, [counter])

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={counterElement}>{counter}</h2>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}

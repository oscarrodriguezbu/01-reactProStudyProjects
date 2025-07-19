import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';


export const useCounter = ({ maxCount = 10 }) => {

    const [counter, setCounter] = useState(5)
    const elementToAnimate = useRef<any>(null);

    const tl = useRef(gsap.timeline());// SOLO SE CREA UNA VEZ Y QUEDA LA INFO EN MEMORIA


    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maxCount));
    }

    useLayoutEffect(() => { //a diferencia del useEffect, se asegura que el elemento html ya esté construido para hacer lo que tenga que hacer

        if (!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause();

    }, [])

    useEffect(() => {
        // if ( counter < maxCount ) return;
        tl.current.play(0);//empieza desde cero
    }, [counter])

    //useEffect y useLayoutEffect se recomiendan quetengan una funcionalidad unica, no importa que hayan muchos

    return {
        counter,
        elementToAnimate,
        handleClick,
    }
}
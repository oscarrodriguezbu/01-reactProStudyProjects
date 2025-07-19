
export type CounterAction = //tambien puede ir en la carpeta de interfaces
    | { type: 'increaseBy', payload: { value: number; } }
    | { type: 'reset' };


// export const doReset = ():CounterAction => { //version retorno clasico
//     return {
//         type: 'reset'
//     }
// }

//Actiones creators: Inspitado en patron redux
export const doReset = ():CounterAction => ({  //version retorno abreviado
    type: 'reset'
})

export const doIncreaseBy = ( value: number ): CounterAction => ({
    type: 'increaseBy',
    payload: { value }
})
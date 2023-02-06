import { useState } from 'react';

export const Contador = () => {
    // valor de typo generico el state useState<numbe>
    const [valor, setValor] = useState<number>(10);
    /// En este caso la unica diferencia es el type nuber 
    const acumular = ( numero: number ) => {
        setValor( valor + numero );
    }

    return (
        <>
            <h3>Contador: <small> { valor } </small> </h3>

            <button
                className="btn btn-primary"
                onClick={ () => acumular(1) }
            >
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={ () => acumular(-1) }
            >
                -1
            </button>
        </>
    )
}

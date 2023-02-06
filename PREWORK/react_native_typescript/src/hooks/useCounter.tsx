import { useState } from 'react';


export const useCounter = ( inicial: number = 10 ) => {
    // me monto un hook que en este caso va recibir el estado inicial de quien llame al hook y si no me lo dan es valor de 10
    const [valor, setValor] = useState(inicial);

    const acumular = ( numero: number ) => {
        setValor( valor + numero );
    }

    return {
        valor,
        acumular
    }
}

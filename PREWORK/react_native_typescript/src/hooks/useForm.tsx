import { useState } from 'react';
/// voy a recibir el formulario pero este formulario hay que typarlo como un generico
/// Easte generico nos sirve para solo podamos reecibir las dos propiedades del formulario
/// T es el estandar que el primer generico sea T 
/// T extiendiende de un objeto, es decir va a ser un objeto
// al decirle que este formulario es de Tipo T y decirle que la campo es de type keyOf T tiene que cumplir la forma del formulario 

export const useForm = <T extends Object>( formulario: T ) => {
    
    const [state, setState] = useState( formulario );

    const onChange = ( value: string, campo: keyof T ) => {
        setState({
            ...state,
            [campo]: value
        });
    }
    /// al poner campo entre conchetes hacemos referencia que el parametro se convierte en la clave

    return {
        ...state,
        formulario: state,
        onChange,
    }

}

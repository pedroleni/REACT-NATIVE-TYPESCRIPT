export const Funciones = () => {
    // aqui se pone el valor del typo en las variables y en el type del return

    const sumar = ( a: number, b: number ):number => {
        return a + b;
    }

    return (
        <>
           <h3>Funciones</h3>
           <span>El resultado es: { sumar( 10, 5 ) }</span>
        </>
    )
}

import { useRef, useState, useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';


export const useUsuarios = () => {
    
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        // Llamar a la API del los usuarios
        cargarUsuarios();
    }, [])


    const cargarUsuarios = async() => {
        /// en las llaves vendrá el objeto que configura la llamada
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        console.log(resp.data.data)
        if( resp.data.data.length > 0 ){ 
            setUsuarios( resp.data.data );
        } else {
            paginaRef.current--;
            alert('No hay mas registros');
        }

    }
    // funciones que se utlizan para manejar las paginas
    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if ( paginaRef.current > 1 ) {
            paginaRef.current --;
            cargarUsuarios();
        }
    }


    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }


}

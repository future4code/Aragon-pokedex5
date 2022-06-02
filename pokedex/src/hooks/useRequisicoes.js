import axios from "axios";
import { URL } from "../constantes/links";
import { useState, useEffect } from "react";

const useRequisicoesData = (initalState) => {
    const [data, setData] = useState(initalState)

    const buscarLista = (paginaAtual) => {
        axios.get(`${URL}/list?limit=20&offset=${20*(paginaAtual-1)}`)
            .then(res => setData(res.data))
            .catch(error => console.log(error))
    }

    useEffect(() => { buscarLista() }, [])
    
    return [data, buscarLista]
};

export default useRequisicoesData;
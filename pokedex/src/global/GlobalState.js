import { createContext, useState } from "react";
import useRequisicoesData from "../hooks/useRequisicoes";

export const GlobalContext = createContext()

export default function GlobalState (props) {
    const [pokeLista, buscarLista] = useRequisicoesData([])
    const [pokedex, setPokedex] = useState([])
    const [pagina, setPagina] = useState(1)

    const context = {
        pokeLista:pokeLista,
        buscarLista: buscarLista,
        pokedex: pokedex,
        setPokedex: setPokedex,
        pagina: pagina,
        setPagina: setPagina
    }

    return(
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}
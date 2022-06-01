import { createContext, useState } from "react";
import useRequisicoesData from "../hooks/useRequisicoes";

export const GlobalContext = createContext()

export default function GlobalState (props) {
    const [pokeLista] = useRequisicoesData("list?limit=20&offset=0", [])

    const [pokedex, setPokedex] = useState([])

    
    const context = {
        pokeLista:pokeLista,
        pokedex: pokedex,
        setPokedex: setPokedex
    }
    
    return(
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
        )
}
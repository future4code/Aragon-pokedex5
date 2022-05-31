import { createContext } from "react";
import useRequisicoesData from "../hooks/useRequisicoes";
import { useRequisicoesDetalhes } from "../hooks/useRequecisaoesDetalhes";

export const GlobalContext = createContext()

export default function GlobalState (props) {
    const [pokeLista] = useRequisicoesData("list?limit=20&offset=0", [])
    
    const context = {
        pokeLista:pokeLista
    }
    
    return(
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
        )
}
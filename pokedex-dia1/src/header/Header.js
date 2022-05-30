import { useNavigate } from "react-router-dom";
import { irParaPokedex, irParaPokeLista } from "../routes/coordinator";

export default function Header(props) {
    const navigate = useNavigate()
    return (
        props.paginaAtual === "pokeLista"
            ? (<header><h1>pokemons</h1>
                <button onClick={() => irParaPokedex(navigate)}>ir para Pokedex</button>
            </header >)
            : (<header><h1>Pokedex</h1>
                <button onClick={() => irParaPokeLista(navigate)}>ir para Pokelista</button>
            </header>)
    )
}
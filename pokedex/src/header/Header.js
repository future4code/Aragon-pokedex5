import { useNavigate } from "react-router-dom";
import { irParaPokedex, irParaPokeLista } from "../routes/coordinator";

export default function Header(props) {
    const navigate = useNavigate()
    const rederizaHeader = () => {
        switch(props.paginaAtual){
        case "pokeLista":
            return(<header> 
                <h1> Pokemons </h1>
                <button onClick={() => {irParaPokedex(navigate)}}> Ir para Pokedex </button>
            </header>)
        case "pokeDetalhes":
            return(<header>
                <h1> Detalhes </h1>
                <button onClick={() => {irParaPokeLista(navigate)}}> Voltar </button>
            </header>)
        case "pokedex":
            return(<header>
                <h1> Pokedex </h1>
                <button onClick={() => {irParaPokeLista(navigate)}}> Ir para lista de pokemons </button>
            </header>)
        default:
            return
    }}

    return (
        <div>
            {rederizaHeader()}
        </div>
    )
}
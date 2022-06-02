import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useContext } from "react";
import { GlobalContext } from "../global/GlobalState";
import CardLista from "../components/CardLista";

export default function Pokelista() {
    const context = useContext(GlobalContext)
    const {pokeLista} = context
    const pokeCartao = pokeLista[0] ? pokeLista.map((pokemon) => {
        return (
            <CardLista 
            key={pokemon.id}
            pokemon={pokemon}
            paginaAtual={"pokeLista"}
            />
        )
    }) : <p> Carregando... </p>
    
    return (
        <div>
            <Header paginaAtual={"pokeLista"} />
            <h2>Lista de Pokemons</h2>
            {pokeCartao}
        </div>
    )           
}    
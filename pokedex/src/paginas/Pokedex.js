import { useContext } from "react";
import CardLista from "../components/CardLista";
import { GlobalContext } from "../global/GlobalState";
import Header from "../header/Header";

export default function Pokedex() {
    const context = useContext(GlobalContext)
    const { pokedex } = context

    const mostrarPokedex = pokedex.map((pokemon) => {
        return (
            <CardLista
                key={pokemon.id}
                pokemon={pokemon}
                paginaAtual={"pokedex"}
            />
        )
    })
    return (
        <div>
            <Header paginaAtual={"pokedex"} />
            <h2>Lista Pokedex</h2>
            {mostrarPokedex}
        </div>
    )
}
import Header from "../header/Header";
import { useContext } from "react";
import { GlobalContext } from "../global/GlobalState";
import CardLista from "../components/CardLista";

export default function Pokelista() {
    const context = useContext(GlobalContext)
    const {pokeLista, pagina, setPagina, buscarLista, pokedex} = context

    const mudaPagina = (soma) => {
        const proximaPagina = pagina+soma
        setPagina(proximaPagina)
        buscarLista(proximaPagina)
    }

    const pokeCartao = pokeLista[0] ? pokeLista.filter((pokemonLista) => {
        for(let pokemonPokedex of pokedex){
            console.log(pokemonLista, pokemonPokedex)
            if(pokemonLista.id == pokemonPokedex.id){
                return false
            } 
        }
        return true
    }).map((pokemon) => {
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
            <hr/>
            <h2>Lista de Pokemons</h2>
            <h3> Seleciona a página </h3>
            {   pagina!==1 && 
                <button onClick={() => {mudaPagina(-1)}}> Página anterior </button>}
                <br/>
                <h4> Página {pagina}</h4>
                <br/>
            <button onClick={() => {mudaPagina(+1)}}> Próxima página </button>
            <hr/>
            {pokeCartao}
        </div>
    )           
}    
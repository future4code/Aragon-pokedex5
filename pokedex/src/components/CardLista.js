import { useEffect, useContext } from "react";
import { GlobalContext } from "../global/GlobalState";
import { useNavigate } from "react-router-dom";
import { useRequisicoesDetalhes } from "../hooks/useRequecisaoesDetalhes";
import { irParaPokedetalhes } from "../routes/coordinator";

export default function CardLista(props) {
    const navigate = useNavigate()
    const [pokeDetalhes, buscarDetalhe] = useRequisicoesDetalhes({})
    const context = useContext(GlobalContext)
    const { pokedex, setPokedex } = context

    const adicionarAPokedex = () => {
        const novaPokedex = [...pokedex, pokeDetalhes]
        const pokedexEmOrdem = novaPokedex.sort((a, b) => {
            return a.id - b.id
        })
        setPokedex(pokedexEmOrdem)
    }

    const removerDaPokedex = () => {
        const novaPokedex = pokedex.filter((poke) => {
            return pokeDetalhes.id !== poke.id;
        });
        setPokedex(novaPokedex);
    };

    useEffect(() => {
        buscarDetalhe(props.pokemon.name)
    }, [])

    return (
        <section>
            <span>
                {pokeDetalhes.name?.toUpperCase()}
            </span>
            <span>
                - Nº  {pokeDetalhes.id}
            </span>
            <figure>
                <img src={pokeDetalhes.images?.front} alt={pokeDetalhes.name} />
            </figure>
            <br />
                {props.paginaAtual === "pokeLista"
                ?<button onClick={() => adicionarAPokedex()}>Adicionar a Pokedex</button>
                :<button onClick={() => removerDaPokedex()}>Remover da Pokedex</button>
                }
            <br />
                <button onClick={() => irParaPokedetalhes(navigate, pokeDetalhes.name)}>Ver detalhes</button>
            <hr />
        </section>
    )
}
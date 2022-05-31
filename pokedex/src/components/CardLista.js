import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRequisicoesDetalhes } from "../hooks/useRequecisaoesDetalhes";
import { irParaPokedetalhes } from "../routes/coordinator";

export default function CardLista (props) {
    const navigate = useNavigate()
    const [pokeDetalhes, buscarDetalhe] = useRequisicoesDetalhes({})

    useEffect(() => {
        buscarDetalhe(props.pokemon.name)
    }, [])

    return(
        <section>
                <span>
                    {pokeDetalhes.name?.toUpperCase()}
                </span>
                <span>
                    - Nº  {pokeDetalhes.id}
                </span>
                <br />
                    <button>Adicionar a Pokedex</button>
                <br />
                    <button onClick={() => irParaPokedetalhes(navigate, pokeDetalhes.name)}>Ver detalhes</button>
                <hr />
        </section>
    )
}
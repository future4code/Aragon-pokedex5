import { useNavigate } from "react-router-dom";
import useRequisicoesData from "../hooks/useRequisicoes";
import { irParaPokedetalhes } from "../routes/coordinator";
import Header from "../header/Header";

export default function Pokelista() {
    const [pokeLista] = useRequisicoesData("list?limit=20&offset=0", [])
    const navigate = useNavigate()
    const pokeCartao = pokeLista && pokeLista.map((pokemon) => {
        return (
            <section>
                <span>
                    {pokemon.name.toUpperCase()}
                </span>

                <span>
                    - Nº  {pokemon.id}
                </span>
                <br />
                <button>Adicionar a Pokedex</button>
                <br />
                <button onClick={() => irParaPokedetalhes(navigate, pokemon.name)}>Ver detalhes</button>
                <hr />

            </section>
        )
    })
    return (

        <div>
            <Header paginaAtual={"pokeLista"} />
            <h2>Lista de Pokemons</h2>
            {pokeCartao}

        </div>


    )           
}    
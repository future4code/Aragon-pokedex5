import { useRequisicoesDetalhes } from "../hooks/useRequecisaoesDetalhes";
import Header from "../header/Header";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Pokedetalhes() {
    const [pokeDetalhes, buscarDetalhe] = useRequisicoesDetalhes({})
    const parametro = useParams()

    useEffect(() => {
        buscarDetalhe(parametro.pokeName)
    }, [])
    const primeirasHabilidades = pokeDetalhes.abilities && [...pokeDetalhes.abilities].splice(0, 5)

    const detalhes =
        pokeDetalhes.name?
        (
            <div>
                <section>
                    <Header paginaAtual={"pokeDetalhes"} />
                    <h2> {pokeDetalhes.name?.toUpperCase()} </h2>
                    <img src={pokeDetalhes.images?.front} alt={`Imagem do ${pokeDetalhes.name} em frente`}/>
                    <img src={pokeDetalhes.images?.back} alt={`Imagem do ${pokeDetalhes.name} atrás`}/>
                </section>
                <section>
                    <h3> Status: </h3>
                    {pokeDetalhes.status.map((poderes) => {
                    return(
                        <div key={poderes["status_name"]}>
                            <span>{poderes["status_name"].toUpperCase()}</span>
                            <span>: {poderes.value}</span>
                        </div>
                    )
                    })}
                </section>
                <section>
                    <h3> Tipos: </h3>
                    {pokeDetalhes.types.map((tipos) => {
                        return(
                            <li key={tipos}>
                                {tipos}
                            </li>
                        )
                    })}
                </section>
                <section>
                    <h3> Habilidades: </h3>
                    {primeirasHabilidades.map((skills) => {
                        return(
                            <li key={skills}>
                                {skills}
                            </li>
                        )
                    })}
                </section>
            </div>
        ) : <p> Carregando... </p>

    return (
        <div>
            {detalhes}
        </div>
    )
}
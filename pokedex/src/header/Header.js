import { useNavigate } from "react-router-dom";
import { irParaPokedex, irParaPokeLista } from "../routes/coordinator";
import styled from "styled-components";
import logoPokedex from "../img/logo-pokedex.png"

const HeaderPoke = styled.header`
    .header{
        background-image: radial-gradient( circle 400px at 6.8% 8.3%,  rgba(255,244,169,1) 0%, rgba(255,244,234,1) 100.2% );
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid black;
        margin-bottom: 10px;
    }
    .logo{
        margin: 0;
        width: 20%;
    }
    .titulos{
        background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(247,87,0,1) 0%, rgba(249,0,0,1) 90.1% );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .buttons{
        border: none;
        width: 15vw;
        height: 4vh;
        background-color: #EF4036;
        color: white;
        font-weight:bold;
        box-shadow: 4px 5px 7px #a3a3a3;
        border-radius: 10px;
        font-size: 1.8 vw;
        margin-bottom: 10px;
        text-transform: uppercase;
        overflow: hidden;
        transition: 1s all ease;
    }
    .buttons:hover {
        cursor: pointer;
        opacity: 80%;
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
    .buttons::before{
        width: 100%;
        height: 0%;
        transform: translate(-50%,-50%) rotate(-45deg);
    }
    .buttons:hover::before{
        height: 380%;
    }
`

export default function Header(props) {
    const navigate = useNavigate()
    const rederizaHeader = () => {
        switch (props.paginaAtual) {
            case "pokeLista":
                return (
                    <header className="header">
                        <img className="logo" src={logoPokedex} />
                        {/* <br/> */}
                        <button className="buttons" onClick={() => { irParaPokedex(navigate) }}> Ir para Pokedex </button>
                    </header>)
            case "pokeDetalhes":
                return (
                    <header className="header">
                        <h1 className="titulos"> Detalhes </h1>
                        <button className="buttons" onClick={() => { irParaPokeLista(navigate) }}> Voltar </button>
                    </header>)
            case "pokedex":
                return (
                    <header className="header">
                        <h1 className="titulos"> Pokedex </h1>
                        <button className="buttons" onClick={() => { irParaPokeLista(navigate) }}> Voltar </button>
                    </header>)
            default:
                return
        }
    }

    return (
        <HeaderPoke>
            {rederizaHeader()}
        </HeaderPoke>
    )
}
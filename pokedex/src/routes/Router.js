import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erro from "../paginas/Erro";
import Pokedex from "../paginas/Pokedex";
import Pokedetalhes from "../paginas/Pokedetalhes";
import Pokelista from "../paginas/Pokelista";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Pokelista />} />
                <Route path={"/pokedex"} element={<Pokedex />} />
                <Route path={"pokemon/:pokeName/details"} element={<Pokedetalhes />} />
                <Route path={"*"} element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
};
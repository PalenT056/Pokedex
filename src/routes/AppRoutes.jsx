import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRoutes
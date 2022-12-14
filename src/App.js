import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Cocktail from "./components/Cocktails/Cocktail";
import SingleMovie from "./components/Movies/SingleMovie";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/:project" element={<Project />} />
                <Route path="/Cocktails/cocktail/:id" element={<Cocktail />} />
                <Route path="/Movies/movie/:id" element={<SingleMovie />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

export default function Form() {
    const searchValue = useRef("");
    const { setSearchTerm } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value);
    }

    useEffect(() => {
        searchValue.current.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                name="cocktail"
                id="cocktail"
                autoComplete="off"
                ref={searchValue}
                onChange={searchCocktail}
                placeholder="Search your favorite cocktail..."
            />
        </form>
    )
}

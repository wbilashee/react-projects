import React from "react";
import { useGlobalContext } from "./context";

export default function SearchForm() {
    const { query, handleSearch } = useGlobalContext();

    return (
        <form
            className="search-form"
            onSubmit={(e) => e.preventDefault()}
        >
            <h2>Search Hacker News</h2>
            <input
                type="text"
                id="search"
                value={query}
                name="search"
                autoComplete="off"
                onChange={(e) => handleSearch(e.target.value)}
            />
        </form>
    )
}

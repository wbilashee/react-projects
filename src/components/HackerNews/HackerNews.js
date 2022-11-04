import React from "react";
import "./HackerNews.scss";
import { AppProvider } from "./context";
import Buttons from "./Buttons";
import Stories from "./Stories";
import SearchForm from "./SearchForm";

export default function HackerNews() {
    return (
        <AppProvider>
            <section className="hacker-news">
                <SearchForm />
                <Buttons />
                <Stories />
            </section>
        </AppProvider>
    )
}

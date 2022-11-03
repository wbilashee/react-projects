import React from "react";
import Form from "./Form";
import Container from "./Container";

export default function Home() {
    return (
        <main className="cocktails">
            <h2 className="title">Cocktails</h2>
            <Form />
            <Container />
        </main>
    )
}

import React from "react";
import "./Cocktails.scss";
import Form from "./Form";
import Container from "./Container";
import { AppProvider } from "./context";

export default function Cocktails() {
  return (
    <AppProvider>
      <main className="cocktails">
        <h2 className="title">Cocktails</h2>
        <Form />
        <Container />
      </main>
    </AppProvider>
  )
}

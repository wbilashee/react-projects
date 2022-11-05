import React from "react";
import "./Pomodoro.scss";
import Break from "./components/Break";
import Controls from "./components/Controls";
import Session from "./components/Session";
import Timer from "./components/Timer";
import { AppProvider } from "./context";

export default function Pomodoro() {
    return (
        <main id="pomodoro">
            <section id="container">
                <div className="main-title">25 + 5 Clock</div>
                <AppProvider>
                    <Break />
                    <Session />
                    <Timer />
                    <Controls />
                </AppProvider>
            </section>
        </main >
    )
}

import React from "react";
import Home from "./Home";
import NotFound from "./NotFound";
import SingleMovie from "./SingleMovie";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/movies/:id",
        element: <SingleMovie />,
    },
    {
        path: "*",
        element: <NotFound />
    },
]);

export default function Movies() {
    return (
        <main className="movies-container">
            <RouterProvider router={router}>
            </RouterProvider>
        </main>
    )
}

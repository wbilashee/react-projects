import React from "react";
import "./Cocktails.scss";
import { AppProvider } from "./context";
import Home from "./Home";
import Cocktail from "./Cocktail";
import NotFound from "./NotFound";
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
    path: "/cocktail/:id",
    element: <Cocktail />,
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

export default function Cocktails() {
  return (
    <AppProvider>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </AppProvider>
  )
}

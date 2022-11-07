import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2 className="title">Not Found</h2>
      <Link to="/"
        className="button"
      >Back Home</Link>
    </div>
  )
}

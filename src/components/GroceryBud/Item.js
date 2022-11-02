import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Item({ id, title, editItem, removeItem }) {
  return (
    <article className="grocery-item">
      <p className="grocery-item-title">{title}</p>
      <div className="btn-container">
        <button
          type="button"
          className="edit-btn"
          onClick={() => editItem(id)}
        >
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  )
}

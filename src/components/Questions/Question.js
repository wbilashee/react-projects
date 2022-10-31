import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Question({ title, text }) {
  const [show, setShow] = useState(false);

  return (
    <div className="question">
      <div className="question-title">
        <p>{title}</p>
        <button onClick={() => setShow(!show)}>
          {show ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      <div className="question-text">
        {show ? <p>{text}</p> : ""}
      </div>
    </div>
  )
}

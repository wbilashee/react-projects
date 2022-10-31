import React, { useState } from "react";

export default function Tour({ tour, removeTour }) {
    const { id, name, image, info, price } = tour;
    const [readMore, setReadMore] = useState(true);

    return (
        <div className="tour">
            <div className="tour-img">
                <img src={image} alt={name} />
            </div>
            <div className="tour-desc">
                <div className="tour-status">
                    <p className="name">{name}</p>
                    <p className="price">${price}</p>
                </div>
                <p className="info">{readMore ? info.substring(0, 200).concat("....") : info} <button onClick={() => setReadMore(!readMore)}>{readMore ? "read more" : "show less"}</button></p>
                <button onClick={() => removeTour(id)} className="button">not interested</button>
            </div>
        </div>
    )
}

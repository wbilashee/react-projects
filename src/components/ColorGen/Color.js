import React, { useEffect, useState } from "react";

export default function Color({ rgb, weight, index, hexColor }) {
    const [alert, setAlert] = useState(false);
    const background = rgb.join(",");
    const hexValue = `#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        }
    }, [alert]);

    return (
        <div
            className={`color ${index > 10 && "color-light"}`}
            style={{ background: `rgb(${background})` }}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </div>
    )
}

import React, { useEffect } from "react";

export default function Alert({ msg, type, list, removeAlert }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [list, removeAlert]);
    return <p className={`alert alert-${type}`}>{msg}</p>;
}

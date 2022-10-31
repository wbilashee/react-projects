import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url, {
            headers: {
                "X-MASTER-KEY": "$2b$10$2l5eoFEt2PyWwTwFWMxK9eNM/x/1NARopBxmrarg4lLpBSFJAnym6",
                "X-ACCESS-KEY": "$2b$10$eT1v9z5.yyr3o.bXwNIBHeYd4IWUNl7U27IUXesvRTdhCnQMSQo0e",
            }
        })
            .then(res => res.json())
            .then(data => {
                setData(data.record);
                setIsLoading(false);
            });
    }, [url]);

    return [data, isLoading];
}

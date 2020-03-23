import { useState, useEffect } from "react";
import {IResult} from "./interfaces";
function useFetch(url: string)  {
    const [data, setData] = useState<IResult>({number_of_records: 0, data: {}});
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }
    useEffect(() => {
        fetchUrl();
    });
    return [data, loading]
}

export  {useFetch} ;

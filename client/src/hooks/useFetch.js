import { axiosInstance } from "@/config/axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axiosInstance({ method: "GET", url });

            setTimeout(() => {
                setData(response?.data?.data);
                setIsLoading(false);
            }, 300);
            setError(null);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setError(error?.response?.data?.message || "error fetching data");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [data, isLoading, error];
};

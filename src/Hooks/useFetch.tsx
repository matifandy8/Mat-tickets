import { useCallback, useEffect, useState} from "react";
import { API } from "../API";

export const useFetch = (endpoint = "") => {
    const [loading , setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<any>(null);

  const getData = useCallback(async () => {
    try {
      const { data } = await API.get(`${endpoint}`); 
        setData(data);
        setLoading(false);
    } catch (e) {
      console.error(e); // KIBANA
        setError(e);
        setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    getData();
  }, [endpoint, getData]);
  return { data, loading, error };
};
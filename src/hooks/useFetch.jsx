import { useEffect, useState, useRef } from "react";
import {
  BASE_URL,
  LIMIT,
  FIELDS,
} from "@common/constants";

export const useFetch = (query = null, page = 1) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);
  const joinedFields = FIELDS.join(",");
  let params = {
    q: query,
    page,
    limit: LIMIT,
    fields: joinedFields,
  };

  const handleFetch = async () => {
    try {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (!query || query === "") {
        setData([]);
        setLoading(false);
        return;
      };
      setLoading(true);
      const abortController = new AbortController();
      abortControllerRef.current = abortController;
      const urlParams = new URLSearchParams(params);
      const response = await fetch(`${BASE_URL}?${urlParams.toString()}`, { signal: abortController.signal });
      const json = await response.json();
      const docs = json?.docs ?? [];
      setData(docs);
      setError(null);
      setLoading(value => !value);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error(error);
        setError(error);
        setLoading(value => !value);
      };
    }
  }

  useEffect(() => {
    handleFetch();
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      };
    };
  }, [query, page]);

  return { data, loading, error };
}
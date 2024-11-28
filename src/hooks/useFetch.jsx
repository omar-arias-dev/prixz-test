import { useEffect, useState, useRef } from "react";
import {
  BOOK_SEARCH_OPTION,
  BASE_URL,
  BOOK_URL,
  AUTHOR_URL,
  LIMIT,
  FIELDS,
} from "@common/constants";

export const useFetch = (query = null, page = 1, option = BOOK_SEARCH_OPTION) => {
  console.log({query, page, option})
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);
  const joinedFields = FIELDS.join(",");
  let params = {
    q: query,
    page,
    limit: LIMIT,
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
      if (option === BOOK_SEARCH_OPTION) {
        params = {
          ...params,
          fields: joinedFields,
        };
      };
      const urlParams = new URLSearchParams(params);
      const response = await fetch(`${BASE_URL}${option === BOOK_SEARCH_OPTION ? BOOK_URL : AUTHOR_URL }?${urlParams.toString()}`, { signal: abortController.signal });
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
  }, [query, page, option]);

  return { data, loading, error };
}
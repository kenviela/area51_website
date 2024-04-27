import { useState } from "react";
const REACT_APP_API_URL = "http://localhost:3001/api";

function buildUrlWithQueryParams(baseUrl, paramsObj) {
  const queryParams = new URLSearchParams(paramsObj).toString();
  const url = new URL(baseUrl);
  url.search = queryParams;
  return url.toString();
}

function useFetch(url, defaultData = null) {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  url = REACT_APP_API_URL + url;
  const makeRequest = async ({
    data = {},
    params = {},
    method = "GET",
  } = {}) => {
    setLoading(true);
    try {
      let init = {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      if (method == "GET") {
        init = {
          method,
          headers: { "Content-Type": "application/json" },
        };
      }
      const response = await fetch(buildUrlWithQueryParams(url, params), init);

      if (response.ok) {
        setData(await response.json());
      } else {
        setError(await response.json());
      }
    } catch (error) {
      console.log(error);
      setError(error);
      console.log("se genero un error");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, makeRequest };
}

export default useFetch;

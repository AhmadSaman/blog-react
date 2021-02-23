import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catchError, setCatchError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not connect");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setCatchError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("aborted");
          } else {
            setLoading(false);
            setCatchError("you cant connect with the server");
            setData(null);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, loading, catchError };
};
export default useFetch;

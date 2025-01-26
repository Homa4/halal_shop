import { useEffect, useState } from "react";
import axios from "axios";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    axios
      .get<T>(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [url]);

  return data;
}

export default useFetch;

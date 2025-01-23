// import { useEffect, useState } from "react";

// function useFetch(url: string) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const abortish = new AbortController();
//       try {
//         const res = await fetch(url, { signal: abortish.signal });

//         if (!res.ok) {
//           throw Error(`Something wrong:${res.status}`);
//         }
//         const result = await res.json();
//         setData(result);
//         console.log(result);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [url]);
//   return { data };
// }

// export default useFetch;

import { useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  console.log("Data:", data);
  return { data };
}

export default useFetch;

import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export const useGetMovies = (url, id = null) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const fetchUrl = id ? `${url}${id}?${apiKey}` : url;

      const res = await fetch(fetchUrl);
      const data = await res.json();

      if (id) {
        setMovie(data);
      } else {
        setMovies(data.results);
      }
    };

    getMovies();
  }, [url]);

  return { movies, movie };
};

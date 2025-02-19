//import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";
import { useGetMovies } from "../hooks/useGetMovies";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  //const [topMovies, setTopMovies] = useState([]);

  //   const getTopRatedMovies = async (url) => {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setTopMovies(data.results);
  //   };

  //   useEffect(() => {
  //     const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

  //     getTopRatedMovies(topRatedUrl);
  //   }, []);

  const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

  const { movies } = useGetMovies(topRatedUrl);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes</h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;

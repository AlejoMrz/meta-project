import { useState, useEffect } from "react";

const KEY = `14b8fe84`;

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState("");
  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          SetError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&S=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          SetError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (!query.length) {
        setMovies([]);
        SetError("");
        return;
      }
      fetchMovies();
    },
    [query]
  );

  return { movies, isLoading, error };
}

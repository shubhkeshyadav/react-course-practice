import { useState, useEffect, useCallback } from "react";

import MoviesList from "./MoviesList";

import "./MovieRoot.module.css";
import AddMovie from "./AddMovie";

function MovieRoot() {
  const [movieList, setMovieList] = useState([]);
  let content = <h2>Nothing to display</h2>;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showMoveAddForm, setShowMoveAddForm] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/movies");

      if (response.status !== 200) {
        throw new Error("Error! Something went wrong");
      }
      const data = await response.json();

      data.sort((a, b) => b.id - a.id);

      setMovieList(data);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  if (isLoading) {
    content = <h2>Loading..</h2>;
  }

  if (error) {
    content = <h2>{error}</h2>;
  }

  if (movieList.length > 0) {
    content = <MoviesList movies={movieList} />;
  }

  const showMoveAddFormHandler = () => {
    setShowMoveAddForm(true);
  };

  const hideMoveAddFormHandler = () => {
    setShowMoveAddForm(false);
  };

  return (
    <div className="movies">
      <section>
        {!showMoveAddForm && (
          <button onClick={showMoveAddFormHandler}>Add Movie</button>
        )}
        {showMoveAddForm && (
          <AddMovie
            fetchMoviesHandler={fetchMoviesHandler}
            hideMoveAddFormHandler={hideMoveAddFormHandler}
          />
        )}
      </section>
      {/* <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section> */}
      <section>{content}</section>
    </div>
  );
}

export default MovieRoot;

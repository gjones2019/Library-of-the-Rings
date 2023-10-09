import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LOTRApi from "../api/api";
import MovieList from "./MovieList";
import CharacterList from "./CharacterList";
import QuoteList from "./QuoteList";
import ErrorBoundary from "./ErrorBoundary";
import "../styles/LOTRApp.css";
import HomePage from "./HomePage";

const LOTRApp: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LOTRApi.get("/movie")
      .then((response) => {
        setMovies(response.data.docs);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });

    LOTRApi.get("/character")
      .then((response) => {
        setCharacters(response.data.docs);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });

    LOTRApi.get("/quote")
      .then((response) => {
        setQuotes(response.data.docs);
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ErrorBoundary>
      {loading ? (
        <div className="container-center">
          <div className="loading-container">
            <h1>Loading...</h1>
          </div>
        </div>
      ) : (
        <Router>
          <div>
            <nav className="header-nav">
              <Link to="/">Home </Link>
              <Link to="/movies">Movies </Link>
              <Link to="/characters">Characters </Link>
              <Link to="/quotes">Quotes</Link>
            </nav>
            <Routes>
              <Route path="/" Component={() => <HomePage />} />
              <Route
                path="/movies"
                Component={() => <MovieList movies={movies} />}
              />
              <Route
                path="/characters"
                Component={() => <CharacterList characters={characters} />}
              />
              <Route
                path="/quotes"
                Component={() => <QuoteList quotes={quotes} />}
              />
            </Routes>
          </div>
        </Router>
      )}
    </ErrorBoundary>
  );
};

export default LOTRApp;

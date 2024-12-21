import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import MusicPlayer from "./MusicPlayer";
import movies from "./movieData";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.css";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const navigate = useNavigate();

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    setFilteredMovies(filtered);
  };

  // Navigate to MusicPlayer with selected movie data
  const playSong = (movie) => {
    navigate(`/player/${movie.title}`, { state: { movie } });
  };

  return (
    <div className="app">
      <header className="navbar">
        <h1>Music Stream</h1>
      </header>
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a movie song..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="movie-container">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} onPlaySong={playSong} />
            ))
          ) : (
            <p>No movies found!</p>
          )}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player/:title" element={<MusicPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;

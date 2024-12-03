
import React from "react";

function MovieCard({ movie, onPlaySong }) {
  return (
    <div className="movie-card">
      <img
        src={movie.poster}
        height={250}
        width={200}
        alt={movie.title}
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/200x300?text=No+Image")
        }
      />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>
        <strong>Year:</strong> {movie.year}
      </p>
      <button onClick={() => onPlaySong(movie)}>Play Song</button>
    </div>
  );
}

export default MovieCard;












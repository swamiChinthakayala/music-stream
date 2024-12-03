
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './style2.css';

function MusicPlayer() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { movie } = state || {};
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    // Redirect to the home page if no movie is passed via state
    if (!movie) {
      navigate("/");
    }
  }, [movie, navigate]);

  // Update progress bar on time update
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0); // Avoid NaN before the metadata is loaded
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  // Play or Pause the song
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Play next song
  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % movie.songs.length);
  };

  // Play previous song
  const playPrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + movie.songs.length) % movie.songs.length
    );
  };

  // Handle scrubbing (seeking) in the progress bar
  const handleScrub = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    // Play the new song automatically when the song index changes
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSongIndex]);

  return movie ? (
    <div className="music-player">
      <div className="music-card">
        <h2>{movie.title}</h2>
        <img
          src={movie.poster}
          alt={movie.title}
          height={300}
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/200x300?text=No+Image")
          }
        />
        <h3>Now Playing: {movie.songs[currentSongIndex].title}</h3>

        {/* Progress Bar */}
        <div className="progress-bar">
          <span className="time">{formatTime(currentTime)}</span>
          <input
            type="range"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleScrub}
            className="progress-input"
          />
          <span className="time">{formatTime(duration)}</span>
        </div>

        <audio
          ref={audioRef}
          src={movie.songs[currentSongIndex].url}
          onEnded={playNext}
        />
        <div className="controls">
          <button onClick={playPrevious}>
            <i className="fa-solid fa-backward"></i>
          </button>
          <button onClick={togglePlayPause}>
            <i
              className={isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"}
            ></i>
          </button>
          <button onClick={playNext}>
            <i className="fa-solid fa-forward"></i>
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

// Utility function to format time (mm:ss)
const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default MusicPlayer;





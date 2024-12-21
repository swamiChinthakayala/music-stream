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
  const [likedSongs, setLikedSongs] = useState({});
  const audioRef = useRef(null);

  // Load liked songs from localStorage
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedSongs")) || {};
    setLikedSongs(savedLikes);
  }, []);

  // Save liked songs to localStorage
  useEffect(() => {
    localStorage.setItem("likedSongs", JSON.stringify(likedSongs));
  }, [likedSongs]);

  useEffect(() => {
    if (!movie) {
      navigate("/");
    }
  }, [movie, navigate]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % movie.songs.length);
  };

  const playPrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + movie.songs.length) % movie.songs.length
    );
  };

  const handleScrub = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const fastForward = () => {
    const audio = audioRef.current;
    if (audio.currentTime + 10 < duration) {
      audio.currentTime += 10;
    } else {
      audio.currentTime = duration;
    }
    setCurrentTime(audio.currentTime);
  };

  const backward = () => {
    const audio = audioRef.current;
    if (audio.currentTime - 10 > 0) {
      audio.currentTime -= 10;
    } else {
      audio.currentTime = 0;
    }
    setCurrentTime(audio.currentTime);
  };

  const toggleLike = () => {
    setLikedSongs((prevLikedSongs) => {
      const updatedLikes = { ...prevLikedSongs };
      const songId = `${movie.title}-${currentSongIndex}`;

      if (updatedLikes[songId]) {
        delete updatedLikes[songId];
      } else {
        updatedLikes[songId] = true;
      }

      return updatedLikes;
    });
  };

  const playSpecificSong = (index) => {
    setCurrentSongIndex(index);
  };

  useEffect(() => {
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
          height={120}
          width={100}
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/200x300?text=No+Image")
          }
        />
         {/* Song List */}
      <div className="song-list">
        <h4>Songs in this Album</h4>
        <ul>
          {movie.songs.map((song, index) => (
            <li
              key={index}
              className={index === currentSongIndex ? "active-song" : ""}
              onClick={() => playSpecificSong(index)}
            >
              {song.title}
            </li>
          ))}
        </ul>
      </div>
        <h3>Now Playing: {movie.songs[currentSongIndex].title}</h3>

        {/* Like Button */}
        <div className="like-container">
          <button onClick={toggleLike} className="like-button">
            {likedSongs[`${movie.title}-${currentSongIndex}`] ? (
              <i className="fa-solid fa-heart liked"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>

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
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button onClick={backward}>
            <i className="fa-solid fa-backward-fast"></i>
          </button>
          <button onClick={togglePlayPause}>
            <i
              className={isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"}
            ></i>
          </button>
          <button onClick={fastForward}>
            <i className="fa-solid fa-forward-fast"></i>
          </button>
          <button onClick={playNext}>
            <i className="fa-solid fa-forward-step"></i>
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default MusicPlayer;

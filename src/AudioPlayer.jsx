
// import React, { useRef, useState, useEffect } from "react";

// function AudioPlayer({ song, onEnd }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   useEffect(() => {
//     setIsPlaying(true);
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   }, [song]);

//   return (
//     <div className="audio-player">
//       <h3>Now Playing: {song.title}</h3>
//       <audio ref={audioRef} src={song.url} onEnded={onEnd} autoPlay />
//       <div className="controls">
//         <button onClick={togglePlayPause}>
//           <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AudioPlayer;


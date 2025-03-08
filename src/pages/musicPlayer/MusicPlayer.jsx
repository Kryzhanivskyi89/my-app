

import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";

import style from './style.module.css'
import Slider from "../../components/musicPlayer/Slider";
import Playlist from "../../components/musicPlayer/Playlist";

function MusicPlayer() {
    const [songs, setSongs] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    useEffect(() => {
      fetch("https://gist.githubusercontent.com/abxlfazl/37404417d17230a629683eb3f2f0a88a/raw/366ad64df645e94592847283a306fe2276de458e/music-info.json")
        .then((response) => response.json())
        .then((result) => setSongs(result.songs))
        .catch((error) => console.error("Помилка завантаження пісень:", error));
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentSongIndex]);

    const handleNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
        // setIsPlaying(true);
    };

    const handlePrev = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
        // setIsPlaying(true);
    };

    const handleTogglePlay = () => {
        setIsPlaying((prevState) => !prevState);
    };

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (audio) {
            const progress = (audio.currentTime / audio.duration) * 100;
            setProgress(progress);
        }
    };

    const handleScrub = (e) => {
        const audio = audioRef.current;
        const progressBar = progressBarRef.current;
        if (audio && progressBar) {
            const newTime = (e.nativeEvent.offsetX / progressBar.offsetWidth) * audio.duration;
            audio.currentTime = newTime;
        }
    };

    if (songs.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={clsx(style.musicPlayer, style.flexColumn)}>
            <Slider 
                song={songs[currentSongIndex]} 
                onNext={handleNext} 
                onPrev={handlePrev} 
                onTogglePlay={handleTogglePlay} 
                isPlaying={isPlaying}
                progress={progress}
                progressBarRef={progressBarRef}
                onScrub={handleScrub}
            />
            <Playlist 
                songs={songs} 
                onSelectSong={setCurrentSongIndex} 
            />
            <audio 
                src={songs[currentSongIndex].files.song} 
                onEnded={handleNext}
                ref={audioRef} 
                onTimeUpdate={handleTimeUpdate}
            />
        </div>
    );
}

// function Slider({ song, onNext, onPrev, onTogglePlay, isPlaying, progress, progressBarRef, onScrub }) {
//   return (
//     <div className={clsx(style.slider, style.center)}>

//         <div className={clsx(style.slider__content,  style.center)}>

//             <button className={clsx (style.musicPlayer__playlistButton, style.center, style.button)}>
//                 <i className={clsx(style.iconPlaylist)}/>
//             </button>

//             <button
//                 onClick={onTogglePlay}
//                 className={clsx(style.musicPlayer__broadcastGuarantor, style.center, style.button)}
//             >
//                 {isPlaying ? <i className={clsx(style.iconPause)} /> : <i className={clsx(style.iconPlay)} />}
//             </button>

//             <div className={clsx(style.slider__imgs, style.flexRow)}>
//                 <img src={song.files.cover} className={style.img} alt={song.songName} />
//             </div>

//         </div>

//         <div className={clsx(style.slider__controls, style.center)}>

//             <button className={clsx(style.slider__switchButton, style.flexRow, style.button)} onClick={onPrev}>
//                 <i className={style.iconBack} />
//             </button>

//             <div className={clsx(style.musicPlayer__info, style.textTrsfPap)}>
//                 <div className={style.musicPlayer__singerName}>
//                     <div>{song.artist}</div>
//                 </div>
//                 <div className={style.musicPlayer__subtitle}>
//                     <div>{song.songName}</div>
//                 </div>
//             </div>

//             <button className={clsx(style.slider__switchButton, style.flexRow, style.button)} onClick={onNext}>
//                 <i className={style.iconNext} />
//             </button>

//             <div 
//                 className={clsx(style.progress, style.center)}
//                 ref={progressBarRef} 
//                 onClick={onScrub}
//             >
//                 <div className={style.progress__wrapper}>
//                     <div className={clsx(style.progress__bar, style.center)} style={{ width: `${progress}%` }} />
//                 </div>
//             </div>

//         </div>
            
//     </div>
//   );
// }

// function Playlist({ songs, onSelectSong }) {
//     return (
//         <ul className={clsx(style.musicPlayer__playlist, style.list)}>
//             {songs.map((song, index) => (
//                 <li key={index} className={style.musicPlayer__song} onClick={() => onSelectSong(index)}>
//                     <div className={clsx(style.flexRow, style._alignCenter)}>
//                         <img src={song.files.cover} className={clsx(style.img, style.musicPlayer__songImg)} alt={song.songName} />
//                         <div className={clsx(style.musicPlayer__playlistInfo, style.textTrsfPap)}>
//                             <b className={style.textOverflow}>{song.songName}</b>
//                             <div className={clsx(style.flexRow, style._justify_spaceBtwn)}>
//                                 <span className={style.musicPlayer__subtitle}>{song.artist}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </li>
//             ))}
//         </ul>
//     );
// }

export default MusicPlayer;
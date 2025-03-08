

// import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";

import style from '../../pages/musicPlayer/style.module.css'

function Slider({ song, onNext, onPrev, onTogglePlay, isPlaying, progress, progressBarRef, onScrub }) {
    
    
    return (
        <div className={clsx(style.slider, style.center)}>
    
            <div className={clsx(style.slider__content,  style.center)}>
    
                {/* <button className={clsx (style.musicPlayer__playlistButton, style.center, style.button)}>
                    <i className={clsx(style.iconPlaylist)}/>
                </button> */}
    
                <button
                    onClick={onTogglePlay}
                    //   onClick={handleTogglePlay}
                    className={clsx(style.musicPlayer__broadcastGuarantor, style.center, style.button)}
                >
                    {isPlaying ? <i className={clsx(style.iconPause)} /> : <i className={clsx(style.iconPlay)} />}
                </button>
    
                <div className={clsx(style.slider__imgs, style.flexRow)}>
                    <img src={song.files.cover} className={style.img} alt={song.songName} />
                </div>
    
            </div>
    
            <div className={clsx(style.slider__controls, style.center)}>
    
                <button className={clsx(style.slider__switchButton, style.flexRow, style.button)} 
                    // onClick={handlePrev}
                    onClick={onPrev}
                    >
                    <i className={style.iconBack} />
                </button>
    
                <div className={clsx(style.musicPlayer__info, style.textTrsfPap)}>
                    <div className={style.musicPlayer__singerName}>
                        <div>{song.artist}</div>
                    </div>
                    <div className={style.musicPlayer__subtitle}>
                        <div>{song.songName}</div>
                    </div>
                </div>
    
                <button className={clsx(style.slider__switchButton, style.flexRow, style.button)} onClick={onNext}>
                    <i className={style.iconNext} />
                </button>
    
                <div 
                    className={clsx(style.progress, style.center)}
                    ref={progressBarRef} 
                    //   onClick={handleScrub}
                    onClick={onScrub}
                >
                    <div className={style.progress__wrapper}>
                        <div className={clsx(style.progress__bar, style.center)} style={{ width: `${progress}%` }} />
                    </div>
                </div>
    
            </div>
                
        </div>
    );
  }

  export default Slider
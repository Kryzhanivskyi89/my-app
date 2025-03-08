
import clsx from "clsx";
import style from '../../pages/musicPlayer/style.module.css'

function Playlist({ songs, onSelectSong }) {
    return (
        <ul className={clsx(style.musicPlayer__playlist, style.list)}>
            {songs.map((song, index) => (
                <li key={index} className={style.musicPlayer__song} onClick={() => onSelectSong(index)}>
                    <div className={clsx(style.flexRow, style._alignCenter)}>
                        <img src={song.files.cover} className={clsx(style.img, style.musicPlayer__songImg)} alt={song.songName} />
                        <div className={clsx(style.musicPlayer__playlistInfo, style.textTrsfPap)}>
                            <b className={style.textOverflow}>{song.songName}</b>
                            <div className={clsx(style.flexRow, style._justify_spaceBtwn)}>
                                <span className={style.musicPlayer__subtitle}>{song.artist}</span>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}


export default Playlist
import style from './Status.module.scss'
import { motion, MotionStyle } from 'framer-motion'
import { StringifyOptions } from 'querystring';
import { AppContextGet } from '@context/lanyard';
import { useEffect } from 'react';



export const Status = () => {
    const lanyard = AppContextGet()

    if (!lanyard?.activities[0] && !lanyard?.spotify) {
        return (
            <div>
                <h1 className='text-lg font-bold text-white'>Not Activity</h1>
            </div>
        )
    }
    if (lanyard.activities[0] && lanyard.activities[0].name == "Spotify" && lanyard.spotify) {
        return (
            <div 
            className={style.status}
        >
            <div>
            {lanyard.spotify.album_art_url
                && 
            <motion.img whileHover={{scale: 1.1}} src={lanyard.spotify.album_art_url} /> 
            }
            </div>
            <div className={style.text}>
            {lanyard.spotify.song && <h1>{lanyard.spotify.song}</h1>}
            {lanyard.spotify.artist && <p>By {lanyard.spotify.artist}</p>}
            </div>
        </div>
        )
    }

    return (
        
        <div 
            className={style.status}
        >
            <div>
            {lanyard.activities[0].assets?.large_image 
                && 
            <motion.img alt="Activite İmage" whileHover={{scale: 1.1}} src={`https://cdn.discordapp.com/app-assets/${lanyard.activities[0].application_id}/${lanyard.activities[0].assets.large_image}`} /> 
            }
            </div>
            <div className={style.text}>
            {lanyard.activities[0].name && <h1>{lanyard.activities[0].name}</h1>}
            {lanyard.activities[0].details && <p>{lanyard.activities[0].details}</p>}
            </div>
        </div>
    )
}
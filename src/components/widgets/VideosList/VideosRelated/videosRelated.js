import React from 'react';
import VideoListTemplate from '../videosListTemplate';
import styles from '../videosList.css';

const VideosRelated = (props) => {
    return <div className={styles.relatedWrapper}>
        <VideoListTemplate data={props.data} teams={props.teams} />
    </div>
}

export default VideosRelated;
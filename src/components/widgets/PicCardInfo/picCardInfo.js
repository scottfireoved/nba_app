import React from 'react';
import styles from './picCardInfo.css';
import CardInfo from '../CardInfo/cardInfo';
const PicCardInfo = (props) => {
    return (
        <div className={styles.newsListItem_wrapper}>
            <div className={styles.left} style={{ background: `url(/images/videos/${props.image})` }}>
                <div></div>
            </div>
            <div className={styles.right}>
                <CardInfo teams={props.teams} team={props.team} date={props.date} />
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}

export default PicCardInfo;
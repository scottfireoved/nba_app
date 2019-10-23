import React from 'react';
import VideosList from '../widgets/VideosList/videosList';

const Videos = () => {

    return (
        <VideosList type="card"
            title={false}
            loadmore={true}
            start={0}
            amount={10} />);
}

export default Videos;
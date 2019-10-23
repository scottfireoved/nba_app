import React from 'react';
import NewsSlider from '../widgets/NewSlider/slider';
import NewsList from '../widgets/NewsList/newsList';

const News = () => {

    return <div>
        <NewsSlider type="featured"
            start={1}
            amount={3}
            settings={{ dots: false }} />
        <NewsList type="pic-card"
            loadmore={true}
            start={3}
            amount={10} />


    </div>;
}

export default News;
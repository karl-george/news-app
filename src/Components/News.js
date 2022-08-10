import Header from './Header';
import Hero from './Hero';
import NewsCard from './NewsCard';

const News = ({ newsData }) => {
  return (
    <div className='news'>
      <Header />
      <Hero newsData={newsData} />
      <NewsCard />
    </div>
  );
};

export default News;

import Header from './Header';
import Hero from './Hero';
import NewsCard from './NewsCard';

const News = ({ newsData }) => {
  const newsArticles = newsData.articles.slice(1, 9);

  const newsElements = newsArticles.map((item) => {
    return <NewsCard article={item} />;
  });

  return (
    <div className='news'>
      <Header />
      <Hero newsData={newsData} />
      <div class='grid grid--1x4'>{newsElements}</div>
    </div>
  );
};

export default News;

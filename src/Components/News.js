import Header from './Header';
import Hero from './Hero';
import NewsCard from './NewsCard';

const News = ({ newsData }) => {
  const newsArticles = newsData.articles.slice(9);

  const newsElements = newsArticles.map((item) => {
    return <NewsCard article={item} />;
  });

  return (
    <div className='news'>
      <Header />
      <Hero newsData={newsData} />
      {newsElements}
    </div>
  );
};

export default News;

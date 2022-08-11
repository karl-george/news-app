import Header from './Header';
import Hero from './Hero';
import NewsCard from './NewsCard';

const News = ({ newsData, toggleFavourite }) => {
  const newsArticles = newsData.articles.slice(0, 10);

  const newsElements = newsArticles.map((item) => {
    return <NewsCard article={item} />;
  });

  console.log(newsData);

  return (
    <div className='news'>
      <Header />
      {/* <Hero newsData={newsData} /> */}
      {newsElements}
    </div>
  );
};

export default News;

import useFetchAPI from '../Utils/useFetchAPI';
import Header from './Header';
import Hero from './Hero';
import NewsCard from './NewsCard';
import Loading from './Loading';

const News = ({}) => {
  const { data: newsData, loading } = useFetchAPI(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
  );

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  const newsArticles = newsData.articles.slice(1, 9);

  const newsElements = newsArticles.map((item, idx) => {
    return <NewsCard article={item} idx={idx} />;
  });

  return (
    <div className='news'>
      <Header />
      <Hero newsData={newsData} />
      <div className='grid grid--1x4 container'>{newsElements}</div>
    </div>
  );
};

export default News;

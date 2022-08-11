import formatTitle from '../Utils/formatTitle';

const NewsCard = ({ article }) => {
  const formattedTitle = formatTitle(article.title);

  return (
    <div className='news-card container'>
      <img src={article.urlToImage} className='news-card-img'></img>
      <h3>{formattedTitle}</h3>
    </div>
  );
};

export default NewsCard;

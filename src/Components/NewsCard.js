import formatTitle from '../Utils/formatTitle';

const NewsCard = ({ article }) => {
  const formattedTitle = formatTitle(article.title);

  return (
    <div className={`news-card`}>
      <img src={article.urlToImage} className='news-card-img'></img>
      <h3>{formattedTitle}</h3>
      <p>{article.source.name}</p>
    </div>
  );
};

export default NewsCard;

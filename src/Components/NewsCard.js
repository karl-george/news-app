import formatTitle from '../Utils/formatTitle';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
  const formattedTitle = formatTitle(article.title);

  return (
    <div className={`news-card`}>
      <Link to={{ pathname: article.url }} target='_blank'>
        <img src={article.urlToImage} className='news-card-img'></img>
        <h3>{formattedTitle}</h3>
        <p>{article.source.name}</p>
      </Link>
    </div>
  );
};

export default NewsCard;

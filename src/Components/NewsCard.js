import formatTitle from '../Utils/formatTitle';
import { Link } from 'react-router-dom';

const NewsCard = ({ article, idx }) => {
  const formattedTitle = formatTitle(article.title);

  return (
    <div className={`news-card`}>
      <Link to={`/article/${idx}`}>
        <img src={article.urlToImage} className='news-card-img'></img>
        <h3>{formattedTitle}</h3>
        <p>{article.source.name}</p>
      </Link>
    </div>
  );
};

export default NewsCard;

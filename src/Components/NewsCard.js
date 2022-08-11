import formatTitle from '../Utils/formatTitle';

const NewsCard = ({ article }) => {
  const trimTitle = formatTitle(article.title);

  return (
    <div className='news-card container'>
      <div className='grid grid--1x2'>
        <img src={article.urlToImage}></img>
        <h3>{trimTitle}</h3>
      </div>
    </div>
  );
};

export default NewsCard;

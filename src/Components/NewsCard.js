import formatTitle from '../Utils/formatTitle';
import { useState } from 'react';

const NewsCard = ({ article, toggleFavourite }) => {
  const formattedTitle = formatTitle(article.title);

  return (
    <div className='news-card container'>
      <img src={article.urlToImage} className='news-card-img'></img>
      <h3>{formattedTitle}</h3>
      <p>{article.source.name}</p>
    </div>
  );
};

export default NewsCard;

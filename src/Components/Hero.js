import formatTitle from '../Utils/formatTitle';
import { Link } from 'react-router-dom';

const Hero = ({ newsData }) => {
  const title = formatTitle(newsData.articles[0].title);

  return (
    <div className='hero container'>
      <Link to={{ pathname: newsData.articles[0].url }} target='_blank'>
        <div className='hero-img-wrapper'>
          <img className='hero-img' src={newsData.articles[0].urlToImage}></img>
          <h3>{title}</h3>
          <p className='hero-source'>{newsData.articles[0].source.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Hero;

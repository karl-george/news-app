import splitTitle from '../Utils/splitTitle';

const Hero = ({ newsData }) => {
  const title = splitTitle(newsData.articles[0].title);

  return (
    <div className='hero container'>
      <div className='hero-img-wrapper'>
        <img className='hero-img' src={newsData.articles[0].urlToImage}></img>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Hero;

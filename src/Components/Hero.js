import formatTitle from '../Utils/formatTitle';

const Hero = ({ newsData }) => {
  const title = formatTitle(newsData.articles[0].title);

  return (
    <div className='hero container'>
      <div className='hero-img-wrapper'>
        <img className='hero-img' src={newsData.articles[0].urlToImage}></img>
        <h3>{title}</h3>
        <p className='hero-source'>{newsData.articles[0].source.name}</p>
      </div>
    </div>
  );
};

export default Hero;

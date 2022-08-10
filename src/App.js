import { useEffect, useState } from 'react';
import './App.css';
import News from './Components/News';
import Loading from './Components/Loading';

function App() {
  const [data, setData] = useState([]);

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className='App'>
      {typeof data.articles != 'undefined' ? (
        <News newsData={data} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;

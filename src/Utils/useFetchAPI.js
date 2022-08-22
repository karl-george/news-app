import { useState, useEffect } from 'react';

function useFetchAPI(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}

export default useFetchAPI;

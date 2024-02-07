import { useEffect, useState } from 'react';

const useFetchAPI = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { mode: 'cors', signal });
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetching data was aborted');
        } else {
          console.log('Error fetching data:', error);
          setErrorState(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, errorState };
};

export default useFetchAPI;

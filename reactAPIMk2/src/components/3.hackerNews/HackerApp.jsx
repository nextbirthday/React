import React, { useEffect, useState } from 'react';
import HackerNews from './HackerNews';
import axios from 'axios';

const HackerApp = () => {
  const [newsList, setNewslist] = useState([]);
  const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';

  useEffect(() => {
    axios.get(NEWS_URL).then((response) => {
      console.log(response.data);
      setNewslist(response.data);
      console.log(newsList);
    });
  }, []);

  return <HackerNews newsList={newsList} />;
};

export default HackerApp;

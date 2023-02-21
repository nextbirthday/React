import axios from 'axios';
import { useEffect, useState } from 'react';
import HackerNews from './components/HackerNews';

const HackerApp = () => {
  const [newsList, setNewsList] = useState([]);
  const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
  useEffect(() => {
    axios.get(NEWS_URL).then((response) => {
      console.log(response.data);
      //6번에서 선언한 useState훅의 데이터를 초기화한다.
      setNewsList(response.data);
      console.log(newsList);
    });
  }, []);
  return <HackerNews newsList={newsList} />;
};

export default HackerApp;

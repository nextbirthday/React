import axios from 'axios';
import { useEffect, useState } from 'react';
import YoutubeMost from './components/YoutubeMost';

const GetPopularList = () => {
  const [popularList, setPopularList] = useState([]);
  const POPULAR_URL =
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDE_7smZNSc-J4c7p44-gnbICMl5wKmI2g';

  useEffect(() => {
    axios.get(POPULAR_URL).then((response) => {
      console.log(response.data);
      setPopularList(response.data);
      console.log(setPopularList);
    });
  }, []);

  return <YoutubeMost popularList={popularList} />;
};

export default GetPopularList;

import React from 'react';

const HackerNews = (props) => {
  const { newsList } = props;
  return (
    <div>
      {newsList &&
        Object.keys(newsList).map((keys, index) => (
          <li key={index}>
            {newsList[keys].id} <br />
            {newsList[keys].title}{' '}
          </li>
        ))}
    </div>
  );
};

export default HackerNews;

const HackerNews = (props) => {
  const { newsList } = props;
  console.log(newsList);

  return (
    <div>
      {newsList &&
        Object.keys(newsList).map((key) => (
          <li>
            {newsList[key].id} <br></br>/ title: {newsList[key].title} <br></br>/ user:🎅 {newsList[key].user} <br></br>/ comments_count:💬{' '}
            {newsList[key].comments_count} <br></br>/ time:🙏 {newsList[key].time} <br></br>/ time_ago: {newsList[key].time_ago} <br></br>
          </li>
        ))}
    </div>
  );
};

export default HackerNews;

const YoutubeMost = (props) => {
  const { mostList } = props;
  console.log(mostList);
  return <div>{mostList && Object.keys(mostList).map((key) => <li>{mostList[key].snippet.id}</li>)}</div>;
};

export default YoutubeMost;

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Sub1 from './Sub1';

const UseEffectApp1 = () => {
  console.log('UseEffectApp1');

  const [data, setData] = useState(0);

  const add = () => {
    console.log('add');

    setData(data + 1);
  };

  useEffect(() => {
    console.log('effect');
  }, [data]);

  return (
    <>
      <h3>데이터:{data}</h3>
      <Button onClick={add}>더하기</Button>
      <Sub1 />
    </>
  );
};

export default UseEffectApp1;

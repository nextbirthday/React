import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Render = (props) => {
  let number = props.number;
  const [result, setResult] = useState(number);

  const add = (props) => {
    console.log('add');

    setResult(result + 1);
  };

  return (
    <>
      <h1>useState 복습-2</h1>
      <Button onClick={add}>+</Button>
      <h2> + result = {result} </h2>
    </>
  );
};

const UseStateApp2 = () => {
  console.log('useStateApp2');

  const number = 0;

  return (
    <>
      <Render number={number} />
    </>
  );
};

export default UseStateApp2;

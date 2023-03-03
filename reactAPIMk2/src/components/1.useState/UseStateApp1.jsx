import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const UseStateApp1 = () => {
  console.log('useStateApp1'); // 무조건 한 번 출력됨
  let numbers = [1, 2, 3];
  /* 상태가 변하면 UI에 반영되는 것이 리액트이다. */
  const [result2, setResult2] = useState(() => {
    console.log('useState'); // 한 번은 출력된다. - 딱 한 번만
    return 0;
  });

  let result = 0;

  const plus = () => {
    console.log(`plus${result2}`);
    result++;
    /* setResult2가 실행될 때 다시 return이 실행된다.(다시 그려짐- 그러니까 1씩 증가되는 숫자를 확인가능하다.) */
    setResult2(result2 + 1);
  };

  return (
    <>
      <h2>useState복습-1</h2>
      <Button onClick={plus}>더하기</Button>
      <h2>덧셈 결과 출력{result}</h2>
      <h2>덧셈 결과 출력{result2}</h2>
      <hr />
      {numbers.map((number, index) => (
        <h3 key={index}>{number}</h3>
      ))}
      <hr />
    </>
  );
};

export default UseStateApp1;

/* 상태값이 변할 때마다 렌더링이 되도록 하고싶다면 useState훅을 사용할 것. */

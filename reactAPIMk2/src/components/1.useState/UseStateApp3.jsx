import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const UseStateApp3 = () => {
  console.log('useStateApp3');
  const [emp, setEmp] = useState([{ empno: 7900, ename: 'james' }]);
  const select = () => {
    console.log('select');

    let sample = [
      { empno: 7566, ename: 'mike' },
      { empno: 8521, ename: 'chris' },
      { empno: 7000, ename: 'john' },
    ];

    setEmp([...emp, ...sample]);
  };

  return (
    <>
      <h2>useState복습-2</h2>
      <Button onClick={select}>조회</Button>
      {emp.map((row, index) => (
        <h3 key={index}>
          {row.empno}, {row.ename}
        </h3>
      ))}
    </>
  );
};

export default UseStateApp3;

/* 상태값이 변할 때마다 렌더링이 되도록 하고 싶다면 useState훅을 사용할 것 
깊은 복사는 객체의 실제 값을 복사하는 것 - 원본을 바꿔도 복사본은 안바뀐다.
얕은 복사는 객체의 주소값을 복사하는 것 - 원본을 바꾸면 복사본도 바뀐다.
sample에 push 함수를 통해서 원소를 추가하면 버튼을 누를 때마다 sample은 증가하지만 렌더링은 새로 되지 않는다.
sample의 주소번지가 바뀌지 않았기 때문이다. 실제 배열의 원소는 계속 증가되지만 return이 호출되지 않는다.

 얕은복사는 원본이 바뀐다.(주소번지가 안바뀐다.)
  깊은 복사는 복사본이 바뀐다. (객체의 실제 값을 복사하는 것이다.) 
  원본을 바꿔도 복사본은 안바뀐다.
*/

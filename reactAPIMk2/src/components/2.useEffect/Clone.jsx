import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Clone = () => {
  console.log('clone');

  const [emp, setEmp] = useState([]);

  const select = () => {
    let sample = [
      { empno: 10, ename: 'lee' },
      { empno: 20, ename: 'kim' },
      { empno: 30, ename: 'choi' },
    ];
    setEmp([...sample]);
  };

  return (
    <>
      <h2>useState복습-3</h2>
      <Button onClick={select}>조회</Button>
      {emp.map((row, index) => (
        <h3 key={index}>
          {row.empno}, {row.ename}
        </h3>
      ))}
    </>
  );
};

export default Clone;

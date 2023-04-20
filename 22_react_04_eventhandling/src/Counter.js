import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const alertMsg = (e, msg) => {
    console.log(e.target);
    alert(`${msg} 현재 숫자는 ${number}입니다!`);
  };

  const consloeMsg = (msg) => {
    console.log(`${msg} 현재 숫자는 ${number}입니다!`);
  };

  return (
    <>
      <div>숫자 카운터</div>
      <h1>{number}</h1>

      <button onClick={increase}>더하기</button>
      <button onClick={() => alertMsg("hello")}>alert띄우기</button>
      <button onClick={(e) => consloeMsg(e, "hello")}>consloe출력</button>
    </>
  );
};

export default Counter;

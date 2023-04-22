import { useRef } from "react";

const RefSample2 = () => {
  // 1. useRef()를 이용해서 로컬변수 만들기
  const id = useRef(1);
  console.log(id); // {current: 1}

  const plusId = () => {
    // id 값 증가
    id.current -= 1;

    //콘설 찍기
    console.log(id);
  };

  return (
    <>
      <h1>{id.current}</h1>
      <button onClick={plusId}>plus ref</button>
    </>
  );
};

export default RefSample2;

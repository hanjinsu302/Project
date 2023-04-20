import { useState } from "react";

const Ex = () => {
  const [list, setList] = useState("안녕");
  const ss = () => {
    setList("잘가");
  };
  return (
    <>
      <h1>{list}</h1>
      <button onClick={ss}>함수형으로 바꾸기</button>
    </>
  );
};

export default Ex;

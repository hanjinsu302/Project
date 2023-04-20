import { useState } from "react";

const Test2 = () => {
  const [visible, setVisble] = useState(true);

  const toggle = () => {
    setVisble(!visible);
    // !true => flase
    // !flase => true
  };

  return (
    <>
      <button onClick={toggle}>{visible ? "사라져라" : "보여라"}</button>
      <h1>{visible && "안녕하세요"}</h1>
    </>
  );
};
export default Test2;

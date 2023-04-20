import { useState } from "react";

function Test3() {
  const [list, setList] = useState("검은글자");
  const [color, setColor] = useState("black");
  const onClick = () => {
    setColor("red");
    setList("빨간글자");
  };
  const onClick2 = () => {
    setColor("blue");
    setList("파란글자");
  };

  return (
    <div>
      <h1>색실습</h1>
      <h1 style={{ color: color }}>{list}</h1>
      <button onClick={onClick}>red</button>
      <button onClick={onClick2}>blue</button>
    </div>
  );
}

export default Test3;

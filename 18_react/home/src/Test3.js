import { useState } from "react";

function Test3() {
  const [list, setList] = useState("검은글자");
  const [color, setColor] = useState("black");
  const onClick = () => {
    setColor("black");
    setList("검은글자");
  };
  const onClick2 = () => {
    setColor("red");
    setList("빨간글자");
  };
  const onClick3 = () => {
    setColor("blue");
    setList("파란글자");
  };

  return (
    <div>
      <h1>색실습</h1>
      <h1 style={{ color: color }}>{list}</h1>
      <button onClick={onClick} style={{ color: "black" }}>
        black
      </button>
      <button onClick={onClick2} style={{ color: "red" }}>
        red
      </button>
      <button onClick={onClick3} style={{ color: "blue" }}>
        blue
      </button>
      <a href="http://49.50.162.139:8000/">프로젝트</a>
      <a href="https://github.com/hanjinsu302/Project_backend.git">git</a>
      <a href="https://velog.io/@hanjinsu302/FORM-%EC%A0%84%EC%86%A1">
        개발진행
      </a>
    </div>
  );
}

export default Test3;

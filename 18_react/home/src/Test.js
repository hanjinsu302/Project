import { useState } from "react";

function Test() {
  const [list, setList] = useState(0);
  console.log(list);
  const onClick = () => {
    setList(list + 2);
    console.log("click");
  };
  const onClick2 = () => {
    setList(list - 1);
    console.log("click");
  };
  return (
    <div>
      <h1>실습</h1>
      <h1>{list}</h1>
      <button onClick={onClick}>up</button>
      <button onClick={onClick2}>down</button>
    </div>
  );
}

export default Test;

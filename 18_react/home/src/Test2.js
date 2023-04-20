import { useState } from "react";
function Test2() {
  const [message, setMessage] = useState("안녕하세요");
  const [bool, setBool] = useState(false);

  const onClick = () => {
    setBool(true);
  };
  const onClick1 = () => {
    setBool(false);
  };

  return (
    <>
      {bool && (
        <>
          <h1>{message}</h1>
        </>
      )}
      <button onClick={onClick}>보여저라</button>
      <button onClick={onClick1}>사라져라</button>
    </>
  );
}
export default Test2;

import { useState } from "react";
function Hicomponent() {
  const [inout, setInout] = useState("");
  const [boo1, setBoo1] = useState(false);

  const onClick1 = () => {
    setInout("입장");
    alert("입장");
    console.log("입장하셨습니다");
  };

  const onClick2 = () => {
    setInout("퇴장");
    alert("퇴장");
    console.log("퇴장하셨습니다");
  };
  const onClick = () => {
    setBoo1(true);
  };
  return (
    <>
      {boo1 && (
        <>
          <h1>{inout}</h1>
          <button onClick={onClick1}>in</button>
          <button onClick={onClick2}>out</button>
        </>
      )}
      <button onClick={onClick}>오픈하기</button>
    </>
  );
}

export default Hicomponent;

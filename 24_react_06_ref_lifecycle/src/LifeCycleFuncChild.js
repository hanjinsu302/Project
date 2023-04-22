import { useEffect, useState } from "react";

//자식 컴포넌트
const LifeCycleFuncChild = (props) => {
  console.log("props>>>>", props); // 객체로 넘어옴
  const { number } = props; //5
  const [text, setText] = useState("");

  // useEffect(() => {
  //   //mount 시점에 실행
  //   console.log("mount!!!");

  //   return () => {
  //     //unmount 시점에 실행
  //     console.log("unmount!!!");
  //   };
  // }, {});

  // //mount & update 시점에 실행
  // useEffect(() => {
  //   console.log("mount or update!!!");
  // });

  useEffect(
    () => {
      console.log("update!!!");
    },
    { text }
  );

  return (
    <>
      <p>LifeCycleFuncChild</p>
      <p>
        <b>{number}</b>
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default LifeCycleFuncChild;

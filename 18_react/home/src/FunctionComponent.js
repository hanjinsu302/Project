import PropTypes from "prop-types";
import { useState } from "react";

function FunctionComponent({ name, age, flower }) {
  const [list, setList] = useState(0); //list:변수이름,  setList:함수이름
  console.log(list);

  const [inout, setInout] = useState("");

  const onClick = () => {
    setList(list + 1);
    console.log("click");
  };

  const onClick1 = () => {
    setInout(inout);
    alert("입장");
    console.log("입장하셨습니다");
  };

  const onClick2 = () => {
    setInout(inout);
    alert("퇴장");
    console.log("퇴장하셨습니다");
  };

  //console.log(props);
  //props = { name: "둘리", age: "300" };
  return (
    <div>
      <h1>hello world, FunctionComponent</h1>
      <h5>{list}</h5>
      <button onClick={onClick}>up</button>
      <button onClick={onClick1}>in</button>
      <button onClick={onClick2}>out</button>
      {/* <h1>당신이 좋하하는 색은?</h1>
      <h5>{name}</h5>
      <h5>{age}</h5>
      <h5>{flower}</h5> */}
    </div>
  );
}
// FunctionComponent.defaultProps = {
//   name: "BBB",
//   age: "11",
//   flower: "hahahah",
// };

// FunctionComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string,
//   flower: PropTypes.string,
// };

// const FunctionComponent = () => {

// }

export default FunctionComponent;

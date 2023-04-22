import React, { useRef } from "react";

class RefSample3 extends React.Component {
  handleFocus = () => {
    console.log(this); // RefSample3 현재 컴포넌트
    console.log(this.myInput.value); // input value 출력

    this.myInput.focus();
  };
  render() {
    return (
      <>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input focusing</p>
        {/* 2. 직접 접근해야하는 DOM요소의 ref prop 설정 */}
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample3;

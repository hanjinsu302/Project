import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Codingon",
    };

    this.printConsloe = this.printConsloe.bind(this);
  }

  printConsloe() {
    console.log("버튼 클릭!!", this.state);
  }
  render() {
    return (
      <div>
        클래스형 컴포넌트에서 이벤트 사용해보기
        <button onClick={this.printConsloe}>print console</button>
      </div>
    );
  }
}

export default ClassComponent;

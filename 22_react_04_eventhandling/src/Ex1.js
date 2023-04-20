import React from "react";

class Ex1 extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "안녕",
    };

    this.printConsloe = this.printConsloe.bind(this);
  }

  printConsloe() {
    this.setState({ title: (this.state.title = "잘가") });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.printConsloe}>클래스로 바꾸기</button>
      </div>
    );
  }
}

export default Ex1;

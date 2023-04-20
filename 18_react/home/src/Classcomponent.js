//import React from "react";
import { Component } from "react";

import PropTypes from "prop-types"; //props 오류 탐색

class ClassComponent extends Component {
  //state 오브젝트
  state = {
    counter: 0,
  };

  up = () => {
    //this.counter = this.counter + 1;
    this.setState({ counter: this.state.counter + 1 });
  };
  down = () => {
    //this.counter = this.counter + 1;
    this.setState({ counter: this.state.counter - 1 });
    //this.setState((value) => ({ counter: value.counter - 1 }));개발자 처럼 코드 작성하기
  };

  //클래스형 컴포넌트 render() 함수 필수
  render() {
    console.log(this.props);
    //this.props = {name:'홍길동', age:'13'}
    const { name, age } = this.props; //분할 할당 가능
    const { counter } = this.state;

    return (
      <div>
        <h1>hello world, ClassComponent</h1>
        <h5>{name}</h5>
        <h5>{age}</h5>
        <h5>{counter}</h5>
        <button onClick={this.up}>숫자up</button>
        <button onClick={this.down}>숫자down</button>
      </div>
    );
  }
}
ClassComponent.defaultProps = {
  name: "AAA",
  age: "11",
};

ClassComponent.prototypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default ClassComponent;

import React from "react";

class LifeCycleClassChild extends React.Component {
  // 컴포넌트가 마운트 되었을 때 실행

  componentDidMount() {
    console.log("mount!!!!");
  }
  //컴포넌트가 업데이트 되었을때 실행
  componentDidUpdate() {
    console.log("update!!!");
  }

  componentWillUnmount() {
    console.log("unmount!!!!");
  }
  render() {
    return (
      <>
        <p>LifeCycleClassChild</p>
        <p>{this.props.number}</p>
      </>
    );
  }
}

export default LifeCycleClassChild;

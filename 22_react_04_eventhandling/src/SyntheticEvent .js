function SyntheticEvent() {
  function syntheticEvent(e) {
    //Synthetic Event(합성이벤트)
    //리엑트는 웹 브라우저의 nativeEvent가 아니라
    //nativeEvent를 감싼 Synthetic Event를 사용함
    // 즉, 리엑트 고유 이벤트 객체!
    console.log(e);
  }

  function printInputValue(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <button onClick={syntheticEvent}>합성이벤트 콘솔찍기</button>

      <input
        type="text"
        placeholder="아무거나 입력"
        onChange={printInputValue}
      ></input>
    </div>
  );
}

export default SyntheticEvent;

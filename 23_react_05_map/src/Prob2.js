// TODO: useState 불러오기
import { useState } from "react";

const Prob2 = () => {
  const [inputWriter, setInputWriter] = useState(""); // 작성자 input state
  const [inputTitle, setInputTitle] = useState(""); // 제목 input state
  const [comment, setComment] = useState([
    {
      writer: "민수",
      title: "안뇽",
    },
    {
      writer: "지민",
      title: "하이하이",
    },
    {
      writer: "희수",
      title: "멋쟁이",
    },
  ]); // 댓글 목록 배열 state

  const addComment = () => {
    console.log("추가버튼 클릭");
    // TODO: state 추가 => comment state네 원소 추가
    const newDate = {
      writer: inputWriter,
      title: inputTitle,
    }; //comment state 배열에 새로 추가 요소

    //Ver1. concat()
    const newComment = comment.concat(newDate);
    setComment(newComment);

    // TODO: input 초기화
    setInputWriter("");
    setInputTitle("");
  };
  // ver2. spread(...) 연산자
  //   setComment([...comment, newData]);

  //   // TODO: input 초기화
  //   setInputWriter('');
  //   setInputTitle('');

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        {/* //htmlFor= react에서 라벨을 클릭해도 인풋에 입력가능 이름이 같을 시!!! */}
        <input
          id="writer"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: comment state 반복 */}
          {comment.map((cmt, idx) => {
            // cmt => { writer: xxx, title: yyy}
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{cmt.title}</td>
                <td>{cmt.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Prob2;

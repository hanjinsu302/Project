import { useState } from "react";

const Ex = () => {
  //alphabet state: 리스트에 대한 상태
  const [alphabet, setAlphabet] = useState([
    { id: 1, alpha: "a", mail: "j@n" },
  ]);
  //inputAlpha state: input 에 넣는 값에 대한 상태

  console.log(alphabet); //출력결과=["a", "p", "p", "l", "e"]

  const [inputAlpha, setInputAlpha] = useState("");
  const [inputMail, setInputMail] = useState("");

  const addAlpha = () => {
    if (inputAlpha.trim().length === 0) return;

    setAlphabet();

    const newAlphabet = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
      mail: inputMail,
    });
    setAlphabet(newAlphabet);
    setInputAlpha("");
    setInputMail("");
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addAlpha();
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
        placeholder="이름을 입력하세요"
      />
      <input
        type="email"
        value={inputMail}
        onChange={(e) => setInputMail(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
        placeholder="이메일을 입력하세요"
      />

      <button onClick={addAlpha}>추가</button>
      <ol>
        {alphabet.map((obj) => (
          <li key={obj.id}>
            {obj.alpha}:{obj.mail}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Ex;

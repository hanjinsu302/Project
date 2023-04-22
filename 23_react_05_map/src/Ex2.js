import { useState } from "react";
import "./Ex2.css";

const Ex2 = () => {
  const [user, setUser] = useState([{ id: 1, txt: "a", name: "j@n" }]);

  const [inputTxt, setInputTxt] = useState("");
  const [inputName, setInputName] = useState("");
  // 정보 입력
  const addUser = () => {
    if (inputTxt.trim().length === 0) return;

    setUser();

    const newUser = user.concat({
      id: user.length + 1,
      txt: inputTxt,
      name: inputName,
    });
    setUser(newUser);
    setInputTxt("");
    setInputName("");
  };
  //엔터 키 입력
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addUser();
    }
  };
  //검색기능
  const searchFilter = () => {};

  return (
    <>
      <br />
      <fieldset>
        <label> 제목:</label>
        <input
          type="text"
          value={inputTxt}
          onChange={(e) => setInputTxt(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
          placeholder="내용을 입력"
        ></input>
        <label>작성자:</label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
          placeholder="이름을 입력"
        ></input>
        <button onClick={addUser}>작성</button>
      </fieldset>
      <br></br>
      <div>
        <select>
          <option value={inputTxt} selected>
            제목
          </option>
          <option value={inputName}>작성자</option>
        </select>
        <input></input>
        <button onClick={searchFilter}>검색</button>
      </div>
      <br />

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {user.map((obj) => (
                <li key={obj.id}>{obj.id}</li>
              ))}
            </td>
            <td>
              {user.map((obj) => (
                <li key={obj.id}>{obj.txt}</li>
              ))}
            </td>
            <td>
              {user.map((obj) => (
                <li key={obj.id}>{obj.name}</li>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <h2>검색결과</h2>
      </div>
    </>
  );
};

export default Ex2;

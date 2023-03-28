const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); //view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로

// 라우팅: 경로 설정
//브라우저에서 어던 url로 접속했을때 어떤 페이지를 보여줄 것 인가?

app.get("/", function (req, res) {
  res.render("index"); // views/index.ejs 파일을 찾아서 응답
});

app.listen(PORT, function () {
  console.log("웹 서버 실행!!");
  console.log(`http://localhost:${PORT}`);
});

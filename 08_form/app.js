const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); //view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로
app.use(express.urlencoded({ extended: true })); //post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); //json 형태로 데이터를 주고 받음

// 라우팅: 경로 설정
//브라우저에서 어떤 url로 접속했을때 어떤 페이지를 보여줄 것 인가?

app.get("/", function (req, res) {
  const myTitle = "폼 실습을 합시다~~~";
  res.render("index", { title: myTitle }); // views/index.ejs 파일을 찾아서 응답
});

app.get("/getForm", function (req, res) {
  //console.log(req);
  console.log(req.query); //사용자가 브라우저에서 입력한 값
  //res.send("get요청성공");
  res.render("result", {
    title: "get 요청 폼 결과 확인하기",
    id: req.query.id, // apple
    pw: req.query.pw, // 1234
  });
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
  //res.send("post요청 성공");
  res.render("result", {
    title: "post 요청 폼 결과 확인하기",
    id: req.body.id,
    pw: req.body.pw,
  });
});

app.listen(PORT, function () {
  console.log("웹 서버 실행!!");
  console.log(`http://localhost:${PORT}`);
});

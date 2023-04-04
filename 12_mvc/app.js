const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes");
//require:폴더 까지만 접근할 경우에는 자동으로 index.js파일을 찾아감.
app.use("/", indexRouter);
// '/~~~~~~~~' 모든 라우터를  /routes/index.js에 정의해 놨으니.
// /routes/index.js를 읽어보면 됨

app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

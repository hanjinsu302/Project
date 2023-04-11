const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cookieParser = require("cookie-parser");

app.get("/", (req, res) => {
  res.render("index");
});

app.set("view engine", "ejs");
// 익스프레스 객체에 미들웨이 등록
app.use(cookieParser("1234"));

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

const express = require("express");
const app = express();

const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/loginup", (req, res) => {
  res.render("loginup");
});

const indexRouter = require("./routes");
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

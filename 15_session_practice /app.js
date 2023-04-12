const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  })
);
const userInfo = { id: "banana", pw: "1234" };

app.get("/", (req, res) => {
  //세션 읽기 (사용)
  //user 값이 없다면: underfined
  //user 값이 있다면: 로그인 아이디 값
  const userSession = req.session.user;
  console.log("userSession", userSession);

  //세션이 있으면 로그인 여부9true/false
  if (userSession !== undefined) {
    res.render("index", { isLogin: true, user: userSession });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    //세션 설정
    req.session.user = req.body.id;
    console.log("req.sssion", req.session);

    res.redirect("/");
  } else {
    res.send(`
      <script>
        alert('로그인 실패...');
        document.location.href = '/';
      </script>
    `);
  }
});

app.get("/logout", (req, res) => {
  // 세션 읽기 (사용)
  const userSession = req.session.user;

  if (userSession !== undefined) {
    // [로그아웃] 링크를 클릭하면 세션 삭제
    req.session.destroy((_) => {
      console.log("GET /logout || req.session >> ", req.session); // undefined

      // / 경로로 이동
      res.redirect("/");
    });
  } else {
    // 유저가 브라우저에서 /logout 경로로 직접 접근할 때
    res.send(`
      <script>
        alert('잘못된 접근임!!!');
        document.location.href = '/';
      </script>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// req 객체
//req.session: "사용자"별로 해당 객체({})안에서 세션 정보 유지
//req.session.키 = 값; // 세션 쿠키 설정
//req.session.키; // 세션 쿠키 사용(읽기)
//req.session.destroy(callback); //세션 삭제

const express = require("express");
const app = express();
const PORT = 8000;

// multer 미들웨어 사용하기
const multer = require("multer"); //multer불러오기
const path = require("path"); // path 불러오기(내장모듈)=> 파일, 폴더 경로를 쉽게 설정
const upload = multer({
  dest: "uploads/",
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      //destination: 경로 설정
      //done: callback함수
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //file.originalname에서 "확장자" 추출
      // path.basename(file.orginalname, ext) => apple (확장자 제거한 파일 이름만!!!)
      // Date.now() =>현재시간
      //done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // [파일명 + 현재시간.확장자] 형식으로 파일 업로드

      done(null, req.body.userid + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB로 파일 크기 제한
  // 5
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads")); // 이미지 파일 업로드 폴더
app.use("/static", express.static(__dirname + "/static")); // js, css static 폴더

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  // {
  //   fieldname: 'profile',
  //   originalname: 'peach.jpg',
  //   encoding: '7bit',
  //   mimetype: 'image/jpeg',
  //   destination: 'uploads/',
  //   filename: 'peach1680324245660.jpg',
  //   path: 'uploads\\peach1680324245660.jpg',
  //   size: 3593
  // }
  console.log(req.file.path); // 이미지 업로드된 경로
  console.log(req.body);
  // {
  //   userid: 'a',
  //   password: 'aa',
  //   username: 'a',
  //   age: '1'
  // }
  res.render("result", {
    userInfo: req.body,
    src: req.file.path,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

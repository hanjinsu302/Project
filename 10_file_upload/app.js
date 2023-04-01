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
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // [파일명 + 현재시간.확장자] 형식으로 파일 업로드
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB로 파일 크기 제한
  // 5
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/upload"));

// Routing (주소 설정)
app.get("/", (req, res) => {
  res.render("index");
});

//single(): 하나의 파일을 업로드 할때 사용
//single()의 매개변수: input의 name과 일치 시키기!
app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file); // 업로드한 파일 정보
  console.log(req.body); // 폼에 입력한 정보
  res.send("Upload!!");
});

// array(): 여러 파일을 한 번에 업로드 할 때 사용
app.post("/upload/array", uploadDetail.array("userfiles"), function (req, res) {
  console.log(req.files); // 업로드한 파일 정보
  console.log(req.body); // 폼에 입력한 정보
  res.send("Upload Multiple Each!!");
});

// fields(): 여러 파일을 각각 input에 업로드 할 때
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log(req.files); // 업로드한 파일 정보
    console.log(req.body); // 폼에 입력한 정보
    res.send("Upload Multiple Each!!");
  }
);

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

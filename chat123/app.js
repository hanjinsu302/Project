const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const http = require("http").Server(app); //socket 기본설정
const io = require("socket.io")(http);
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [라우터 분리]
const indexRouter = require("./routes"); // index는 생략 가능!
app.use("/", indexRouter);

const userRouter = require("./routes/user"); // index는 생략 가능!
app.use("/user", userRouter);

// [404 error] 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
app.get("*", (req, res) => {
  res.render("404");
});

const nickObj = {};

function updateNickList() {
  io.emit("updateNicks", nickObj);
}

io.on("connection", (socket) => {
  console.log("⭕ server socket connected>>", socket.id);

  socket.on("setNick", (nick) => {
    console.log("socket on setNick >>", nick);

    if (Object.values(nickObj).indexOf(nick) > -1) {
      socket.emit("error", "이미 존재하는 닉네임 입니다. 다시 입력해주세요!!");
    } else {
      //아이디 통과
      nickObj[socket.id] = nick; // nickObj 객첵에 "소켓_아이디: 닉네임" 추가
      io.emit("notice", `${nick}님이 입장 하였습니다.`); //입장 메세지 "전체 공지"
      // 전체 공지 => 서버에 접속한 모든 클라이언트에게 이벤트 전송
      socket.emit("entrySuccess", nick); //입장 성공시
      updateNickList(); //닉네임 리스트 객체 업데이트
    }
  });

  //[실습 3-3] 접속자 퇴장
  //disconnect event: 클라이언트가 연결을 끊었을 때 발생 (브라우저 탭 닫음)
  socket.on("disconnect", () => {
    console.log("*** ❌ Server Socket Disonnected >>", socket.id);

    //미션!!
    //1. xx님이 퇴장하셨습니다 출력
    io.emit("notice", `${nickObj[socket.id]}님이 퇴장 하였습니다.`);
    //2. nickObj에서 닫은 탭의 socket.id를 삭제
    delete nickObj[socket.id];
    //3. 리스트 업데이트 하기
    updateNickList();
  });
  // [실습4] 채팅창 메세지 전송
  socket.on("send", (obj) => {
    console.log("socket on send >>", obj); // {myNick: 'xx', msg: '안녕'}

    if (obj.dm !== "all") {
      //dm전송
      let dmSocketId = obj.dm; //각 닉네임에 해당하는 socket.id
      const sendData = { nick: obj.myNick, dm: "(속닥속닥)", msg: obj.msg };
      //1. dm을 보내고자하는 그 socket.id 한테 메세지 전송
      io.to(dmSocketId).emit("newMessage", sendData);
      //2. dm을 보내고 있는 자기 자신 메세지 전송
      socket.emit("newMessage", sendData);
    } else {
      //all전송
      const sendData = { nick: obj.myNick, msg: obj.msg };
      io.emit("newMessage", sendData);
    }
  });
});

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

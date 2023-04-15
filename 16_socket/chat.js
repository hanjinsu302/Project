const express = require("express");
const app = express();
const http = require("http").Server(app); //socket 기본설정
const io = require("socket.io")(http); //socket 기본설정
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat");
});
let numUsers = 0;

//닉네임을 저장할 객체
// : 닉네임이 겹치지 않도록 객체({})를 사용함
// { 소켓_아이디: 닉네임,... }
const nickObj = {};

//[실습3-2]
//닉네임 리스트 객체를 업데이트
//유저가 들어오거나 퇴장할 때 내역 업데이트
function updateNickList() {
  io.emit("updateNicks", nickObj, numUsers);

  //서버에 접속한 클라이언트들에게 nickobj에 변경이 일어났음을 알리는 이벤트
}

//io.on( x, y ): socket과 관련된 통신 작업 처리
//(x,y) x: event  y: callback함수
io.on("connection", (socket) => {
  //'connection' event
  // - 클라이언트가 접속 했을 때 발생하는 이벤트x
  // - 콜백으로 socket 객체를 제공

  //⭕❌
  // 최초 입장시 (연결)
  //socket.id: 소켓 고유 아이디 -> socket은 웹 페이지 별로 id 생성!
  // => 크롬에서 탭 두개 띄우면 socket.id 는 각각 생김(2개)
  console.log("⭕ server socket connected>>", socket.id);
  numUsers++;
  io.emit("userCount", numUsers);

  //[실습1]
  // socket.on("hello", (data) => {
  //   console.log(`${data.who} : ${data.msg}`);
  //   //sever -> client 보낼 때
  //   socket.emit("helloKr", { who: "hello", msg: "안녕" });
  // });

  // socket.on("study", (data) => {
  //   console.log(`${data.who} : ${data.msg}`);

  //   socket.emit("studyhard", { who: "study", msg: "공부" });
  // });

  // socket.on("bye", (data) => {
  //   console.log(`${data.who} : ${data.msg}`);

  //   socket.emit("byegood", { who: "bye", msg: "잘가" });
  // });

  //[실습3] 채팅창 입력
  //io.emit("notice", `${socket.id.slice(0, 5)}님이 입장 하였습니다`);

  //[실습 3-2]
  socket.on("setNick", (nick) => {
    console.log("socket on setNick >>", nick);

    //닉네임 중복 여부
    if (Object.values(nickObj).indexOf(nick) > -1) {
      //아이디 중복
      socket.emit("error", "이미 존재하는 닉네임 입니다. 다시 입력해주세요!!");
    } else {
      //아이디 통과
      nickObj[socket.id] = nick; // nickObj 객첵에 "소켓_아이디: 닉네임" 추가
      io.emit(
        "notice",
        `${nick}님이 입장 하였습니다.현재 접속자 수: ${numUsers}명`
      ); //입장 메세지 "전체 공지"
      // 전체 공지 => 서버에 접속한 모든 클라이언트에게 이벤트 전송
      socket.emit("entrySuccess", nick); //입장 성공시
      updateNickList(); //닉네임 리스트 객체 업데이트
    }
  });

  //[실습 3-3] 접속자 퇴장
  //disconnect event: 클라이언트가 연결을 끊었을 때 발생 (브라우저 탭 닫음)
  socket.on("disconnect", () => {
    console.log("*** ❌ Server Socket Disonnected >>", socket.id);
    numUsers--; // 접속자 수 1 감소
    io.emit("userCount", numUsers);

    //미션!!
    //1. xx님이 퇴장하셨습니다 출력
    io.emit(
      "notice",
      `${nickObj[socket.id]}님이 퇴장 하였습니다.현재 접속자 수: ${numUsers}명`
    );
    //2. nickObj에서 닫은 탭의 socket.id를 삭제
    delete nickObj[socket.id];
    //3. 리스트 업데이트 하기
    updateNickList();
  });
  // [실습4] 채팅창 메세지 전송
  socket.on("send", (obj) => {
    console.log("socket on send >>", obj); // {myNick: 'xx',dm:"yy", msg: '안녕'}
    //[전체] 선택하고 전송시 -> dm: 'all'
    //특정 닉네임을 선택하고 전송 -> dm: socket.id

    // [실습4] 채팅창에 메세지 전송 step2
    //   서버에 접속한 모든 클라이언트들에게 '누가 뭐라고 말했는지' 이벤트 보내기
    // const sendData = { nick: obj.myNick, msg: obj.msg };
    // io.emit("newMessage", sendData);

    //[실습5]DM구현
    //만약에 dm메세지라면 그 특정 socket.id에게만 메세지 전달
    //  { nick, dm, msg}
    //만약에 dm메세지가 아니면; 전체 공지
    //  { nick, msg}
    if (!obj.msg) {
      socket.emit("error", "메시지를 입력해주세요!");
      return;
    }

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

// // js object에 key, value 추가하는 방법
// const nickObj = {};

// const socket = { id: 'asdfasdf123412343541' };

// nickObj.hello = '안녕'; // 방법1
// nickObj['apple'] = '사과'; // 방법2
// nickObj[socket.id] = 'sean'

// console.log(nickObj)

//주의: socket 을 사용할때는 http.listen으로 port 열어줘야함
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// const nickObj = { hello: '안녕', apple: '사과' };

// // for in 반복문
// for (let key in nickObj) {
//   console.log(key, nickObj[key]);
// }

// const nickObj = {hello: '안녕', apple: '사과'}

// console.log(nickObj)
// delete nickObj['hello']
// console.log(nickObj)

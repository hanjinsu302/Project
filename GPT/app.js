const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const http = require("http").Server(app); //socket 기본설정
const io = require("socket.io")(http);
const PORT = 8080;

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

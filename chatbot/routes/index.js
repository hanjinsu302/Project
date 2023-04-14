const express = require("express");
const controller = require("../controller/Cindex");
const router = express.Router();

//회원가입 요청
router.get("/loginnup", controller.loginup); // 받아오기
router.post("/loginup", controller.postregisterUser);
//로그인 요청
router.get("/login", controller.login); //받아오기
router.post("/login", controller.postloginUser);

module.exports = router;

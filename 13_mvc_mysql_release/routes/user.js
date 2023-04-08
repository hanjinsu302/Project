// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.index);
//회원가입 요청
router.get("/signup", controller.signup); // 받아오기
router.post("/signup", controller.postregisterUser);
//로그인 요청
router.get("/signin", controller.signin); //받아오기
router.post("/signin", controller.postloginUser);

//회원 정보 불러오기
router.post("/profile", controller.postprofile);
// 정보 수정 하기
router.post("/profile/edit", controller.profileEdit);
//회원 정보 삭제하기
router.post("/profile/delete", controller.profileDelete);

module.exports = router;

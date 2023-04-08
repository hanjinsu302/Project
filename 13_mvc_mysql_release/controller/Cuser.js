// TODO: 컨트롤러 코드
const User = require("../model/User");
exports.index = (req, res) => {
  res.render("index");
};

exports.signin = (req, res) => {
  res.render("signin"); //로그인
};

exports.signup = (req, res) => {
  res.render("signup"); // 회원가입
};

exports.postregisterUser = (req, res) => {
  User.postregisterUser(req.body, () => {
    res.send(true);
  });
};

exports.postloginUser = (req, res) => {
  console.log(req.body);

  User.postloginUser(req.body, (result) => {
    console.log("Controller postloginUser", result);

    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};
exports.postprofile = (req, res) => {
  console.log(req.body);
  User.postprofile(req.body.userid, (result) => {
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    } else {
      res.redirect("/user/signin");
    }
  });
};

exports.profileEdit = (req, res) => {
  console.log(req.body);
  User.profileEdit(req.body, () => {
    res.send("수정 성공!");
  });
};

exports.profileDelete = (req, res) => {
  console.log(req.body); // { id: n }
  User.profileDelete(req.body.id, (result) => {
    console.log("Cuser.js >> ", result);
    res.end("삭제 성공!!");
  });
};

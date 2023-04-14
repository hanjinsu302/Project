const models = require("../models");

exports.loginup = (req, res) => {
  res.render("loginup");
};

exports.login = (req, res) => {
  res.render("login");
};

exports.post_loginup = async (req, res) => {
  // [before]
  // console.log(req.body); // 사용자가 폼에 입력한 정보
  // User.post_signup(req.body, () => {
  //   // res.end(): 데이터 없이 응답할 때 사용
  //   res.end();
  // });

  // [after]
  await models.mindex.create({
    email: req.body.email,
    name: req.body.name,
    userid: req.body.userid,
    pw: req.body.pw,
  });
  res.end();
};

exports.post_login = async (req, res) => {
  // [before]
  // console.log(req.body); // 폼에 입력한 로그인 정보
  // User.post_signin(req.body, (result) => {
  //   console.log(result);
  //   // 존재하는 유저로 로그인시 -> [ {} ]
  //   // 존재하지 않는 유저로 로그인시 -> []
  //   if (result.length > 0) {
  //     // 로그인 성공
  //     res.send(true);
  //   } else {
  //     // 로그인 실패
  //     res.send(false);
  //   }
  // });

  // [after]
  const result = await models.midex.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  });
  console.log(">>>>>> ", result);
  // 로그인 성공; result = {}
  // 로그인 실패; result = null

  if (result) {
    res.send(true);
  } else {
    res.send(false);
  }
};

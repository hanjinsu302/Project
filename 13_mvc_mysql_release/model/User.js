// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "1234",
  database: "condingon",
});

//회원가입을 요청을 해야 되는 코드를 작성 해야 하는디
exports.postregisterUser = (data, callback) => {
  const sql = `INSERT INTO user(userid, name, pw) VALUES ('${data.userid}','${data.name}', '${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("postregisterUser", rows);

    callback();
  });
};
//로그인을 요청 하는 코드를 작성해야 하는디
exports.postloginUser = (data, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw = '${data.pw}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log(rows);
    callback(rows);
  });
};
//정보 불러오기
exports.postprofile = (userid, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`; //LIMIT: 테이블에서 정보를 가져올 데이터의 갯수:한명의 정보를 가져 올꺼니깐 LIMIT1
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Model User: ", rows);
    callback(rows);
  });
};

//수정
exports.profileEdit = (data, callback) => {
  const sql = `update user set userid='${data.userid}', name='${data.name}',pw='${data.pw}' WHERE id=${data.id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("User.js>>", rows);
    callback();
  });
};

//삭제
exports.profileDelete = (id, cb) => {
  conn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
    if (err) {
      throw err;
    }

    cb();
  });
};

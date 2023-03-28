//내가 작성 한거
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); //작업 성공시 then(name)
    }, 1000);
  });
}
function back(back) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}
function hell(hell) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback");
    }, 1000);
  });
}

call("kim")
  .then(function (name) {
    console.log(`${name}  방가원`);
    return back();
  })
  .then(function (txt) {
    console.log(`${txt} 를 실행`);
    return hell();
  })
  .then(function (msg) {
    console.log(`${msg}hell`);
  });

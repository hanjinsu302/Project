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

async function exce() {
  let name = await call("kim");
  console.log(name + "방가");
  let back = await call("back");
  console.log(back + "을 실행");
  let hell = await call("callback");
  console.log("여기는" + hell);
}
exce();

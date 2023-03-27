// promise( 포로미스)
//:비동기 함수를 동기 처리 하기 위해 만든 객체
// : 성공이랑 실패 분리 해서 동기
// +. 성공이든 실패든 무언가의 "최조 결과"
// resolver가 성공 상태
// rejected가 실패 상태
// 프로미스를 콜백 함수 전달할 필요가 없다 . 그냥 호출 하면 됨

// 1. 프로미스 생성 코드
//promise1 함수의 리턴 값이 promise 객체
/*
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `promise의 상태는 fulfillde!! then으로 연결 됩니다. 이때 flag는 ${flag} 입니다`
      );
    } else {
      reject(
        `promise의 상태는 rejected!! catch으로 연결 됩니다. 이때 flag는 ${flag} 입니다`
      );
    }
  });
}

//2. 프로미스 사용(소비)하는 코드 작성 하기
promise1(true)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

promise1(false)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
*/

/*function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민");
}
function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "제로콜라";
      price = 4000; // 2000 -> 상품명, 가격 출력 / 4000-> 금액 부족 메세지 출력

      if (price <= 2000) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}
//resolve 할 때 실행할 함수
function pay() {
  console.log(`상품명:${product}, 가격:${price}`);
}

// reject 할 때 ㅅㄹ행할 함수
function nopay() {
  console.log("금액부족!");
}

let product; //underfind
let price; //underfind
goMart();
pickDrink()
  .then(pay) // pickDrink 함수 안에서 resolve 실행시 then으로 연결
  .catch(nopay); // pickDrink 함수 안에서 reject 실행시 catch 으로 연결

/*pickDrink().then(function () {
  console.log(`상품명:${product}, 가격:${price}`);
});*/

//callback 함수 이용
/*function add(n1, n2, callback) {
  setTimeout(function () {
    let result = n1 + n2;
    callback(result);
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2;
    callback(result);
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1;
    callback(result);
  }, 500);
}

// add -> mul -> sub
add(5, 9, function (x) {
  console.log("1:", x); // x = 4 + 3
  mul(x, function (y) {
    console.log("2:", y); // y = x * 2
    sub(y, function (z) {
      console.log("3:", z); //z = y - 1
    });
  });
});*/

//promise체이닝 사용
/*function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}
add(4, 3)
  .then(function (result) {
    console.log("1:", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2:", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3:", result);
  });*/

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      reject(new Error("의도적으로 에러"));
    }, 500);
  });
}
add(4, 3)
  .then(function (result) {
    console.log("1:", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2:", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3:", result);
  })
  .catch(function (err) {
    console.log("실패!");
    console.log(err);
  });

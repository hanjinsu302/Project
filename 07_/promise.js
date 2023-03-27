// promise( 포로미스)
//:비동기 함수를 동기 처리 하기 위해 만든 객체
// : 성공이랑 실패 분리 해서 동기
// +. 성공이든 실패든 무언가의 "최조 결과"
// resolver가 성공 상태
// rejected가 실패 상태
// 프로미스를 콜백 함수 전달할 필요가 없다 . 그냥 호출 하면 됨

// 1. 프로미스 생성 코드
//promise1 함수의 리턴 값이 promise 객체

function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `promise의 상태는 fulfillde!! then으로 여결 됩니다. 이때 flag는 ${flag} 입니다`
      );
    } else {
      reject(
        `promise의 상태는 rejected!! catch으로 여결 됩니다. 이때 flag는 ${flag} 입니다`
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

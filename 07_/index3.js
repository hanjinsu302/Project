// async/await
//비동기 처리 패턴 중 가장 퇴신 문법
// promise 기반 코드를 더 가독성 있게 하기 위해 등장

//구조
//-함수 앞에 async 키워드 붙이기
//-비동기처리 매서드 앞에 await 키워드 붙이기 (해당 작업을 기다려 줄 것)
//async와 await는 세트!! 같이 쓰기!
/*
async function 함수명() {
  await 비동기처리_매서드명();
}
*/

// 1초 뒤에 과일 배열을 출력하는 코드
/*
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["🍉", "🥝", "🍋"];
      resolve(fruits);
      //reject(new Error('알수없는 에러'))
    }, 1000);
  });
}
*/

// #! promise then() 사용시
//fetchFruits().then(function (fruits) {
//  console.log(fruits);
//});

// #2 async / awiat 사용시
//예외 처리 try catch 구문
//구조
// try 블록 코드가 실행
// try 블록에서 에러가 없으면 catch 블록은 건너뜀
// try 블록에서 에러가 있으면 try 블록 실행이 중단 -> catch블록 코드 실행
/*
try {
    // 코드 실행시 ing
    // 에러 발생시 catch로 이동
}catch (error){
    //에러 발생
}
*/

/*
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}
printItems();
*/

//#################################################

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민");
}
function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "제로콜라";
      price = 4000; // 2000 -> 상품명, 가격 출력 / 4000-> 금액 부족 메세지 출력
      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명:${product}, 가격:${price}`);
}

async function exec() {
  goMart(); // 1번 실행
  await pickDrink(); // 2번 실행 -> 기다려줘야함
  pay(); //2번이 완료되어야 3번 실행

  //장점> 코드 실행 순서가 명확히 보임
}

let product;
let price;
exec();

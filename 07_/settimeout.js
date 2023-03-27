//settimeout()
//settimeout(code, delay)
//delay(ms단위) 동안 기다리다 code 함수 실핼
/*console.log(1);
setTimeout(function () {
  console.log(2);
}, 2000);

console.log(3);

// settimeout을 이용/1초 후에 body tag의 배경색을 빨간색을 바꾸기
setTimeout(function () {
  //1.body tag선택
  //2. 배경 색상을 빨간색으로 변경
  document.querySelector("body").style.backgroundColor = "red";
}, 1000);

function changeColor() {
  document.querySelector("h1").style.color = "blue";
}
setTimeout(changeColor, 1000);*/

/*function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민");
}
function pickDrink() {
  setTimeout(function () {
    console.log("고민 끝!");
    product = "제로콜라";
    price = 2000;
  }, 3000);
}
function pay(product, price) {
  console.log(`상품명:${product}, 가격:${price}`);
}

let product; //underfind
let price; //underfind
goMart();
pickDrink();
pay(product, price);*/

//################################################
//callback 함수
//:다른함수의 실행이 끝난 뒤 실행되는 함수
//:어떤 함수의 파라미터(매개변수, 인자)로 쓰임
/*function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민");
}
function pickDrink(callback) {
  // callback:매개변수가 될 콜백 함수
  setTimeout(function () {
    console.log("고민 끝!");
    product = "제로콜라";
    price = 2000;
    callback(product, price); // 매개변수로 넘긴 콜백 함수를 실행
  }, 3000);
}
function pay(product, price) {
  console.log(`상품명:${product}, 가격:${price}`);
}

let product; //underfind
let price; //underfind
goMart();
pickDrink(function (product, price) {
  console.log(`상품명:${product}, 가격:${price}`);
});*/

//################################################
//콜백 지옥
// 콜백 함수가 반복되어 코드의 들여쓰기가 너무 깊어짐
// 가독성과 유지보수성 하락

// 1초바다 배경색이 변경되는 코드
// 빨 주 노 초 파 로 변경
setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
          setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "gray";
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//################################################
//promise 함수
//pending:(대기) 수행중인 상태
//fulfilled:(이행) promise가 resolve 된 상태
//rejscted: (거부) 지켜낵 못한 상태 reject된 상태

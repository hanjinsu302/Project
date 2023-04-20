//구조 분해 할당
const lists = ["apple", "grape"];
console.log(lists[0]);
[item1, item2, item3 = "peach"] = lists;
console.log("item1:", item1);
console.log("item2:", item2);
console.log("item3:", item3);

//변수값 바꾸기
let x = 1,
  y = 2;
console.log("x:", x, "y:", y);
[x, y] = [y, x];
console.log("x:", x, "y:", y);
//순서가 중요!
//배열이 많아지면 분해할당을 이용하여 편리하게 사용

//*******객체 구조 분해*********
const obj = {
  key1: "one",
  key2: "two",
};
console.log(obj.key1);
const { key1: newkey, key2, key3 = "three" } = obj;
// console.log('key1:',key1);
// console.log('key2:',key2);
console.log("newkey:", newkey);
console.log("key3:", key3);

const { a, b } = { a: 10, b: 10 };
console.log("a:", a);
console.log("b:", b);

//spread 연산자
//기존의 것을 건들이지 않고, 새로운 객체를 만들 수 있음
const a1 = [1, 2, 3, 4, 5];
console.log(...a1); //...점 3개 가 중요
//함수 호출에 점(...)을 사용하는 경우 spread연산자

//spread연산자 #1
//-> 객체의 값을 펼치는 연산자
const t1 = [1, 2, 3];
const t2 = [5, 6];
const t3 = [...t1, ...t2]; // 배열을 합칠 때 사용
console.log(t3);

//spread연산자 #2
const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const cookierun = {
  ...cookie,
  toping: "choco",
};
console.log(cookierun);

//spread연산자 #3
const mycookie = ["카쿠키", "톡쿠키"];
const youcookie = ["인쿠키", "스쿠키", "타쿠키"];
const wecookie = [...mycookie, "디쿠키", "엠쿠키", ...youcookie];
console.log(wecookie);

//rest 파라미터: 남은 인수들을 묶어서 배열로 변환
//함수 매개변수에 점(...)을 사용하는 경우 rest 매개변수
//rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능
const data = { c: 30, d: 40, e: 50, f: 60 };
const { c, d, ...rest } = data; //...변수명: 거의 rest씀
console.log("c:", c);
console.log("d:", d);
console.log("rest:", rest); // rest 남은 연산자들을 가져옴 값을 묶어 줄때 사용

//배열분해 할당
const newArr = ["one", "two", "three"];
const [one, two, three, four = "four"] = newArr;
console.log(one, two, three);
console.log("four: ", four);

//swap
let newA = 10,
  newB = 20;
console.log(newA, newB);
[newA, newB] = [newB, newA];
console.log("newA: ", newA);
console.log("newB: ", newB);

//객체 분해 할당
const newObj = {
  one: "one",
  two: "two",
  three: "three",
};
//기존 방식
console.log(newObj.one);
console.log(newObj.two);
console.log(newObj.three);
///객체분할 할당 사용시
const { one: Newone, two: Newtwo, three: Newthree } = newObj;
console.log(Newone);
console.log(Newtwo);
console.log(Newthree);

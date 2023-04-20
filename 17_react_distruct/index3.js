//단축평가 || (논리합) &&(논리곱)

const a = 20;
const b = 10;

a > b && console.log("A가 B보디 큽니다");
//논리곱은 조건식일 때

a < b || console.log("A가 b보다 큽니다");

function test(name) {
  const obj = {
    a: name || "기본이름",
  };
  console.log(obj);
}
test();
test("홍길동");

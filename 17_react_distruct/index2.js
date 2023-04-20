//class
//-> 객체 생성 탬플릿 => 객체를 만들기 위해 사용
class Cat {
  //생성자
  constructor(name, age) {
    //속성
    this.name = name;
    this.age = age;
  }
  //매소드1
  mew() {
    console.log("야옹");
  }
  //메소드2
  eat() {
    console.log("먹이!!!");
  }
}
let cat1 = new Cat("나비", 1);
cat1.mew();
cat1.eat();

//class가 없던 시절

let tv1 = {
  name: "aaa",
  price: 2000,
  size: "l",
};
let tv2 = {
  name: "bbb",
  price: 3000,
  size: "s",
};

let tv3 = {
  name: "ccc",
  //price: 5000,
  size: "xl",
};

console.log(tv1.price, tv2.price, tv3.price); //tv3 값 undefined 뜸

//클래스 등장 = 일종의 작업지시서
class Tv {
  name = "";
  price = 0;
  size = "";

  constructor(name, price, size) {
    //this: 여기 클래스 안에 있는 속성
    //this.name: 이 클래스 안에 있는 name!
    this.name = name;
    this.price = price;
    this.size = size;
  }

  getprice() {
    //가져오는 것
    return this.price + "만원";
  }

  setprice(price) {
    //바굴려고 하는 것
    this.price = price;
  }
}

const newTv1 = new Tv("aaaTV", 200, "L");
console.log(newTv1.getprice());
newTv1.setprice(4000);
console.log(newTv1.getprice());

//하위class
class Product {
  name = "";
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price + "만원";
  }
}

//상속 : 부모 클래스(product)로 부터 변수, 메소드를 가져와서 (laptop) 사용하는 개념
class Laptop extends Product {
  weight = "";
  constructor(name, price, weight) {
    //상속받은 부모 클래스 값을 불러옴
    super(name, price);
    this.weight = weight;
  }
}

let laptop = new Laptop("삼성", 2000, "55");
console.log(laptop.price);
console.log(laptop.getPrice());
//오류 발생!!! 부모클래스에는 자식 클래스의 값을 사용하지 못한다
let parent = new Product("tv", 1000);
console.log(parent.weight);

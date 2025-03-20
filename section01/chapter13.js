// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자를 통해서 만듦.
let obj2 = {}; // 객체 리터럴 => 대부분 사용. 난 초기화라고 생각했는데, 리터럴로 객체 생성이구나

// 2. 객체 프로퍼티 (객체 속성)
// properties (어디서 많이 들어본 거 같은데)
let person = {
  name : "나",
  age : 30,
  hobby : "농구",
  job : "기타",
  extra : {},
  "like cat" : true //띄워쓰기는 안 쓰지만 ""로 묶어서 사용 가능
}

// 3. 객체 프로퍼티를 다루는 방법
// 3_1. 특정 프로퍼티에 접근 (점표기법, 괄호 표기법)
let name = person.name;
// let age = person[age]; //진짜 age라는 변수를 찾는다.
let age = person["age"];

console.log(name, age);

// 3_2. 새로운 프로퍼티를 추가하는 방법
person["favoriteFood"] = "마라탕"; // 객체 속성 추가
console.log(person)

// 3_3. 기존의 프로퍼티를 수정하는 방법
person["age"] = 25; // 덮어씌우기 됨.
console.log(person)

// 3_4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["hobby"];
console.log(person)

// 3_5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // 이러한 속성이 있니? 없니?
let result2 = "zzzz" in person;
console.log(result1)
console.log(result2)
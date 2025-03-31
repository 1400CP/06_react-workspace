// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // Big Integer에 해당하는 값. 엄청 큰 값
// 총 7개 이외에는 다 Truthy

if(!f4){
  console.log("Falsy")
}else{
  console.log("Truthy")
}

// 2. Truthy한 값 
// -> Falsy 빼고 다
let t1 = "hi";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t5){
  console.log("Truthy")
}else{
  console.log("Falsy")
}

// 3. 활용 사례
// name 속성 추출하는 경우

// function printName(person){ // 매개변수 필요
//  console.log(person.name);
// }

// let person = {
//   name:"내이름"
// }

function printName(person){ // 매개변수 필요
  // if(person === undefined || person === null){ // 조건이 너무 복잡해?
  if(!person) { // person은 원래 truthy니까, !person은 falsy.
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

// let person; // 어떤 문제가 생겼다고 가정! undefined가 뜸
let person = null;
printName(person);
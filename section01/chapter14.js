// 1. 상수 객체
const animal = {
  type:"고양이",
  name:"네로",
  color:"black"
};

// animal = 123; 상수는 재할당 불가능

animal.age = 2; // 추가는 되나? 가능
console.log(animal)
// 객체의 주소값을 바꾼 것이 아니기 때문에 추가 가능이요.
animal.name = "까망이"; // 수정
console.log(animal)
delete animal.color; // 삭제
console.log(animal)

// 2. 메소드 속성
// => 속성의 값이 함수인 프로퍼티를 말한다.

const person = { // 여러 가지 속성값이 들어가 있음
  name:"나",
  // sayHi:function(){ // 메소드 속성
  //   console.log("차렷, 인사.")
  // }
  sayHi(){ // 메소드 속성, 줄이기 가능
    console.log("차렷, 인사.")
  }
}

person.sayHi(); // 함수 실행
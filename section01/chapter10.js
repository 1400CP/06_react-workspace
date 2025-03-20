// 1. 함수 표현식으로 함수 생성

function funcA(){
  console.log("아아아아");

}

let varA = funcA; // 함수를 담을 수 있다.
console.log(varA)

varA(); // 함수가 실행됨
funcA();
// varB(); 익명함수로 만들 경우 호이스팅 대상이 되지 않는다.
// 호이스팅은 기명함수일 때만 된다.

// 2. 익명함수로 함수 생성
let varB = function(){ // 이게 가능 => 이름이 없게 됨.
  console.log("비비비비비비");
}
varB(); // 이름이 없어서, 함수 실행은 varB()로만 가능

// 3. 화살표 함수
let varC = (value) => value + 1;

console.log(varC(10));
// 1. Number 타입
let num1 = 20;
let num2 = 1.5;
let num3 = -20.5; // java에서는 double, int 등으로 나누어지는데 유도리 있음

console.log(num1 % num2); // 모듈러 연산이라고 부른다.

let inf = Infinity; // 무한대값도 저장 가능하다.
let mInf = -Infinity; // 마이너스 무한대값.

let nan = NaN; // Not a Number. 숫자가 아니얌.

// 2. String 타입
let myName = "은우";
let myLocation = "강남구";
let introduce = myName + myLocation;

let introduceText = `${myName}는 ${myLocation}에 거주합니다.`;

console.log(introduceText);

// 템플릿 리터럴 문법. 백틱!(``)

// 3. Boolean 타입
let isTrue = true;
let isFalse = false;

// 4. Null 타입
let empty = null; // 진짜 아무것도 없음

// 5. Undefined 타입
let und; // 이후 초기화 과정 안 함
console.log(und); // Null과의 차이는 값을 줘야 나온다.
// 건드리지도 않은 것이 Undefined
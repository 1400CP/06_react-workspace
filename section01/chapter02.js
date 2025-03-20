// 1. 변수 선언(let age) 및 초기화(값 때려박기, = 20;)
let age = 20;

console.log(age)
// 재할당
age = 30;

// 2. 상수
const birth = "1999.01.01";
// birth = "2005.01.01"; 재할당 불가

// 3. 변수 명명 규칙(네이밍 규칙)
// 3_1. $ or _ 제외한 기호는 사용할 수 없다. (JQurey할 때 $를 자주 사용했음)
let $_name;

// 3_2. 숫자로 시작할 수 없다.
let name1;
// let 1name; 불가능

// 3_3. 예약어 안 됨.
// let if; let for;

// 4. 변수 명명 가이드
let salesCount = 1; // 변수 명명 시 의미있는 것으로, 알아봐야 한다.
let refundCount= 2;
let total = salesCount + refundCount;
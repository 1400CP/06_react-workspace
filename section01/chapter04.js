// 1. 묵시적 형변환
// 시키지도 않았는데 알아서 되는 거, 누가? 자바스크립트 엔진이

let num = 10;
let str = "20";

const result = num + str; // num과 String이 만나면 String으로 변함.
console.log(result) // 1020 으로 나옴.

// 2. 명시적 형변환
// 자동으로 안되니까 우리가 직접
// 문자열 => 숫자
let str1 = "10";
let strToNum1 = Number(str1); // 형변환, 숫자만 있어야 함.
console.log(strToNum1)

let str2 = "10개";
let strToNum2 = parseInt(str2); // 처음에 숫자로 시작해야 함.
console.log(strToNum2)

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1)

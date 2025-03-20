// 1.Null 병합 연산자
// 존재하는 값을 추려내는 기능
// null이나 undefined 아닌 값을 찾아내는 연산자

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // null이나 undefined는 추출되지 않는다.
console.log(var4)
let var5 = var1 ?? var3;
console.log(var5)
let var6 = var2 ?? var3;
console.log(var6) // 둘 다 값이 있는 경우 앞의 번호가 이김.

let userName = "차은우";
let userNickName = "얼굴천재";
let displayName = userName ?? userNickName;
// 로그인 후 환영합니다 뜨게 할 때 null 병합으로 둘 중 하나를 고르게 한다.

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
let t1 = typeof(var7);
console.log(t1)

// 3. 삼항연산자
// 조건 ? 참 : 거짓
let result = 10 % 2 === 0 ? "짝수" : "홀수";
console.log(result)
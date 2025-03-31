// 1. Spread 연산자
// => Spread : 흩뿌리다, 펼치다 라는 뜻
// => 객체나 배열에 저장된 여러 개의 값들을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3,4];
// let arr2 = [4, arr1[0], arr1[1], arr1[2],5,6];
// 위험하거나 번거로운 방식
// 값이 추가되거나 삭제되는 경우 수정이 까다로움

let arr2 = [4, ...arr1, 5,6]; // spread연산자가 ...임
// console.log(arr2);

let cookie = {
  makeDate : "20250321",
  maker : "내이름",
  shop : "서울시"
}
// let blueberryCookie = {
//   makeDate : "20250321",
//   maker : "내이름",
//   shop : "서울시",
//   topping : "blueberry"
// }

let blueberryCookie = {
  ...cookie,
  topping:"blueberry"
}
console.log(blueberryCookie);

function funcA(p1,p2,p3){ // 구조 분해 할당
  console.log(p1,p2,p3);
}

funcA(...arr1); // spread 연산자

// 2. Rest 매개변수
// 나머지 매개변수

// function funcB(...rest){ // rest 매개변수
//   console.log(rest)
// }
function funcB(one,...arguments){ // rest 매개변수
  console.log(one, arguments)
}
// function funcB(one,...rest, four){ 불가능
//   console.log(one, rest)
// }

funcB(...arr1); // spread 연산자
// 1. rest 매개변수는 무조건 마지막에 나와야 한다.
// 2. ...rest 또는 ...arguments로 사용한다.
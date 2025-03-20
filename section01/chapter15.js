// 1. 배열 생성
let arrA = new Array(); // 배열 생성자;
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [ // Java는 같은 타입만, Js는 섞이는 거 OK
  1,
  2,
  3,
  true,
  "hi",
  true,
  null,
  undefined,
  () => {},
  {},
  []
]

// 2. 배열 요소 접근
let item1 = arrC[0]; // 1이 나오겠지
let item2 = arrC[1]; // 2가 나오겠지

arrC[0] = "hi"; // 1이 "hi"로 바뀜
console.log(arrC)
// src/math.js

export function add(a,b){
  return a+b;
}

export function sub(a,b){
  return a-b;
}

// 기본함수

export default function multi(a,b){
  return a*b;
} 
// 밖으로 내보내야 함

// cjs 모듈 시스템 방식
// module.exports = { // 객체
//   add : add, // 축약 가능 == add
//   sub : sub // 축약 가능 == sub
// }

// EMS 방식
// export{add,sub};
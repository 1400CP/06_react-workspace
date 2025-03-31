console.log(1);

// 대표적인 비동기 함수
// setTimeout(콜백함수,시간);
setTimeout(()=>{ // WepAPIs, 보조메모리로 넘겨버림.
  console.log(2);
},3000); // 3000ms, 3초 뒤에 처리하러 옴.

console.log(3)
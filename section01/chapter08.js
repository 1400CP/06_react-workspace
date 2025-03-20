// 1. for문

for(let idx=0; idx<= 10; idx++){ // ;; 무한 루프를 돈다.

  if(idx % 2 === 0){ // 아래의 일정은 진행하지 않음
    continue; // 건너뛰기, 증감만 수행
  }

  console.log("반복");

  if(idx >= 5){
    break; // 나와 가장 가까운 반복문 탈출
  }
}
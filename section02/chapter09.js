// 5가지 배열 변형 메소드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// 검색 기능에서 사용하면 편하다
let arr1 = [
  {name:"차은우", hobby:"얼굴"},
  {name:"주지훈", hobby:"연기"},
  {name:"박보검", hobby:"연기"}
];

// const actor = arr1.filter((item)=>{ // 콜백함수
//   if(item.hobby === "연기"){
//     return item;
//   }
// })

// const actor = arr1.filter((item)=> // 이렇게 단축도 가능합니다.
//   item.hobby === "연기"
    
// )
const actor = arr1.filter((item) => item.hobby === "연기")

console.log(actor);

// 2. map ** 중요!!
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];

const mapResult1 = arr2.map((item, idx, arr)=>{
  // map안에서는 콜백함수에서 return을 사용할 수 있음
  return item * 2;
})

console.log(mapResult1);

let names = arr1.map((item)=>item.name);

console.log(names);
// react에서 굉장히 많이 사용된다.
// 순회!!

// 3. sort
// 배열을 사전순으로 정렬하는 메소드
let arr3 = ["b", "a", "c"];
let arr34 = [10, 3, 4];
arr3.sort();
arr34.sort();

arr34.sort((a,b)=>{ // 숫자일 경우 이렇게 사용해야 한다.
  if(a>b){
    //b가 a앞에 와
    return 1; // sort에서는 양수를 반환하면 자리를 바꿈
  }else if(b>a){
    // a가 b앞에 와라
    return -1;
  }else{
    // 2개의 자리를 바꾸지 마라
    return 0;
  }
})

console.log(arr3); // 원본 배열에 영향을 끼치는 메소드
console.log(arr34);

// 4. toSorted()
// 원본 배열을 훼손시키지 않고 새로운 배열을 반환
let arr5 = ["c", "b", "a"];
let sorted = arr5.toSorted();

console.log(sorted); // 최신 함수

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메소드
let arr6 = ["hi", "i'm nice"];
let join = arr6.join("-");

console.log(join);
// 5가지의 요소 순회 및 탐색 메소드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메소드
let arr1 = [1,2,3];

arr1.forEach(function(item,idx,arr){ // 콜백함수 (함수가 인자에, 매개변수에 들어갔으니까)
  console.log(idx, item);
});

let doubledArr = [];

arr1.forEach((item)=>{  // 화살표 콜백함수
  doubledArr.push(item*2)
})
  
console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메소드
let arr2 = [1,2,3];
let isIncludes = arr2.includes(1); // Boolean

console.log(isIncludes);

// 3.indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메소드
let arr3 = [1,2,3];
let index = arr3.indexOf(3); // 위치를 반환
// let index = arr3.indexOf(-20); // 존재하지 않는 위치인 경우 -1

console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메소드
let arr4 = [1,2,3];
// arr4.findIndex((item)=>{ // 콜백함수, 순회
//   if(item % 2 !== 0) { // 홀수
//     return true;
//   }
// })
const findIndex = arr4.findIndex((item)=>{
  if(item % 2 !== 0) { // 홀수
    return true;
  }
})

console.log(findIndex); // 0을 반환

let objectArr = [ // 객체배열
  {name:"내이름"},
  {name:"네이름"},
];

const objIndex = objectArr.indexOf({name:"내이름"});
console.log(objIndex); // -1 반환 (찾을 수 없다)

// indexOf는 얕은 비교를 하기 때문에 찾지 못한다.
// 객체를 찾을 때는 findIndex 메소드를 사용해야 한다. (주소값도 확인해야지)

const objIndex2 = objectArr.findIndex((item)=>{
  if(item.name === "내이름"){
    return true;
  }
})

console.log(objIndex2); // 0 반환 (찾음)

// 단순 원시 타입 indexOf
// 복잡한 객체 타입은 findIndex

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
  {name:"이름"},
  {name:"성함"}
]

const find = arr5.find((item)=>{ // 콜백함수
  if(item.name === "이름"){
    return true;
  }
})

console.log(find);
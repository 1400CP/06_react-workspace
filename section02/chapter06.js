// 1. 배열 순회
let arr = [1,2,3];

// 1_1. 배열 인덱스
for(let i=0; i<arr.length; i++) { // for문을 활용한 순회
  console.log(arr[i]);
}

// 1_2. for of 반복문
for(let item of arr){ // 배열의 요소들이 item에 들어간다
  console.log(item);
}

// 2. 객체 순회
let person = {
  name:"내이름",
  age:30,
  hobby:"넝구"
}

// 2_1. Object.keys() 사용
// => 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person); // keys함수는 매개변수가 필요하다.
console.log(keys);

for(let key of keys){
  const value = person[key];
  console.log(key, value);
}

// 2_2. Object.values() 사용
// => 객체에서 value값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

for(let value of values){
  console.log(value);
}

// 2_3. for in문
// => 객체에서만 사용 가능
for(let key in person){ // person의 key값을 key에 넣어요
 const value = person[key];
 console.log(key, value);
}

// for of는 배열에만
// for in은 객체에만

// ... 제일 어려운데? key value값이 어떻게 그냥 나오는 거지?
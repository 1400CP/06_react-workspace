// 6가지의 배열 요소 조작하는 메소드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하고 배열의 길이를 반환하는 메소드

let arr1 = [1,2,3];
// arr1.push(4,5,6,7,8);

const newLength = arr1.push(4,5,6,7,8);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거
let arr2 = [1,2,3];
// arr2.pop();

const popItem = arr2.pop();
console.log(popItem);

// 3.shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1,2,3];
// arr3.shift();

const shiteItem = arr3.shift();
console.log(shiteItem);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하고 배열 길이 반환하는 메소드

let arr4 = [1,2,3,4]
// arr4.unshift(0);

const newLength2 = arr4.unshift(0);
console.log(newLength2);

// shift와 unshift는 push랑 pop보다 느리게 동작
// 인덱스를 밀고 복붙해야 하기 떄문! 어쩔 수 없음

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1,2,3,4,5];
// let slice1 = arr5.slice(2,5);
// let slice1 = arr5.slice(2); // 2에서부터 다 자르기
let slice1 = arr5.slice(-2); // 뒤에서부터 자르기

console.log(slice1);
console.log(arr5); // 원본에 영향을 주지 않음

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환
let arr6 = [1,2];
let arr7 = [3,4];

let concatArr = arr6.concat(arr7);
console.log(concatArr);
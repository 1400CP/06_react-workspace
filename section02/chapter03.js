// 1. 배열의 구조 분해 할당

let arr = [1,2,3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one,two,three);

// let [one,two,three, four] = arr; // 구조 분해 할당, four = undefined
let [one,two,three, four=4] = arr; // 구조 분해 할당

console.log(one,two,three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name:"내이름",
  age:30,
  hobby:"농구"
}

let {name,age,hobby,extra="hi"} = person; // 구조 분해 할당
console.log(name,age,hobby,extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({name,age,hobby}) => { // 매개변수
  console.log(name,age,hobby);
}

func(person); // 인자
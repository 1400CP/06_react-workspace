// 단락평가
function returnFalse(){
  console.log("False 함수")
  return undefined;
  // return false;
}

function returnTrue(){
  console.log("True 함수")
  return 10;
  // return true;
}

// console.log(returnFalse() && returnTrue()); // false가 있기 때문에 true를 볼 필요가 없다.
// console.log(returnTrue() && returnFalse()); // true 이후 false를 확인하고 true와 false를 도출한다.
// console.log(returnTrue() || returnFalse()); // true에서 바로 멈춤.
// console.log(returnFalse() || returnTrue()); // false 이후 true 확인하고 false와 true를 도출.

// 단락평가 활용 사례
function printName(person){
//  if(!person){
//   console.log("person값이 없음");
//   return;
//  }

 const name = person && person.name;
 console.log(name || "person의 값이 없음");

//  console.log(person.name);
}

// printName();
printName({name:"내이름"});

// T || T => 앞을 반환
// T && T => 뒤를 반환
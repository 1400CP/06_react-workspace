// 1. 함수 선언

function hi(){
  console.log("nyam");

}

console.log("호출 전")
hi(); // 함수를 불러야 보여!
console.log("호출 후")

// function getArea(width, height){  // 매개변수 width, height 2개

//   let area = width * height;
//   console.log(area)
// }

let area = getArea(10, 30); // 인자 2개를 적어서 넘김
console.log(area);
getArea(10, 40); // 인자 2개를 적어서 넘김

// 자바스크립트는 호이스팅(최상단으로 끌어올려서 실행시켜줌)
// function getArea(width, height){  // 매개변수 width, height 2개

//   let area = width * height;
//   return area;
// }

function getArea(width, height){  // 매개변수 width, height 2개
  
  function another(){ // 함수 안에 함수 가능
    console.log("어나더")

  }
  another()

  let area = width * height;
  return area;
}
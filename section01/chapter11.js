// 1. 콜백 함수

function main(value){ // 인자를 받아서 매개변수를 sub 함수로 받았네.
  value();

}

function sub(){
  console.log("나 서브얌");

}

// main(sub); 인자로 sub를 줬다. 근데 인자가 함수네. 콜백 함수 = sub

main(() => {
  console.log("나두 서브야")
})

// 2. 콜백 함수 활용
// function repeat(count, callback){
//   for(let idx=1; idx<=count; idx++){
//     console.log(idx);
//   }
// }
function repeat(count, callback){
  for(let idx=1; idx<=count; idx++){
    callback(idx);
  }
}

// repeat(반복횟수, 콜백함수);
repeat(5, (idx) => {
 console.log(idx);
});

repeat(3, (idx) => {
  console.log(idx*2);
 });

repeat(1, (idx) => {
  console.log(idx*3);
});

// function repeatDouble(count){
//   for(let idx=1; idx<=count; idx++){
//     console.log(idx * 2);
//   }
// }

// function repeatTriple(count){
//   for(let idx=1; idx<=count; idx++){
//     console.log(idx * 3);
//   }
// }
function task(){
  setTimeout(()=>{
    console.log("여기가 핵심이다!")
  },3000)
}
// task();

function add(a,b, callback){ // 매개변수로 받음
  setTimeout(()=>{
    const sum = a + b;
    // 콜백으로 비동기를 하는 것, 외워라!
    callback(sum); // function add의 sum을 비동기로 가져가려면 이렇게 콜백하라.
  }, 3000)
}
add(1,2, (value)=>{  // 지금은 콜백함수의 매개변수
  // console.log(value);
}); // 인자

function order(callback){
  setTimeout(()=>{
    const food = "떡볶이"; // 인자로 넘김
    callback(food); 
  },2000)
}

// // 음식을 식히는 함수
// function ice(food, callback){
//   setTimeout(()=>{
//     const iceFood = `식은 ${food}` //인자
//     callback(iceFood);
//   },1000)
// }

// // 음식을 냉동시키는 함수
// function freeze(food, callback){
//   setTimeout(()=>{
//     const freezeFood = `${food}에게 냉동빔!` // 인자
//     callback(freezeFood);
//   },500)
// }

// order((food)=>{ // 매개변수
//   console.log(food);

//   ice(food, (iceFood)=>{ // 매개변수
//     console.log(iceFood);

//     freeze(food, (freezeFood)=>{
//       console.log(freezeFood) // 매개변수수
//     })
//   })
// });


// 음식을 주문하는 함수
function order(callback){
  setTimeout(()=>{
    const maratan = "마라탕"; // 인자
    callback(maratan);
  },2000)
}

// 음식을 식히는 함수
function cool(maratan, callback){
  setTimeout(()=>{
    const coolFood = `식은 ${maratan}`; // 인자
    callback(coolFood);
  }, 1000)
}

// 음식 냉동 함수
function ice(maratan, callback){
  setTimeout(()=>{
    const iceFood = `${maratan}에게 냉동빔`; // 인자
    callback(iceFood);
  }, 500)
}

// 콜백지옥
order((maratan)=>{ // 매개변수
  console.log(maratan);

  cool(maratan, (coolFood)=>{
    console.log(coolFood);
    
    ice(maratan, (iceFood)=>{
      console.log(iceFood);

    })
  })
})
// 인덴트가 점점 깊어질 수 있음.
// 기능이 늘어나면 늘어질수록.
// 콜백지옥을 빠져나가기 위해 promise를 사용함.


















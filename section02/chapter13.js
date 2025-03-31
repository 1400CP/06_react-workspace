// Promise
const promise = new Promise((resolve, reject)=>{ 
  // 콜백함수가 반드시 들어가야 한다.
  // 비동기 작업을 실행하는 함수, excutor

  // resolve : 프로미스의 상태를 성공으로 바꿔주는 함수
  // reject : 프로미스의 상태를 실패로 바꿔주는 함수

  setTimeout(() => {
    // console.log("하이")
    // resolve("졸립다"); // fulfilled 성공
    // reject("졸리니까 그렇지 잉~"); //rejected 실패
  }, 1000)
});
// 콜, 부르지 않아도 그냥 실행이 된다.

setTimeout(()=>{
  // console.log(promise);
},1100)

function add10(num){ // 숫자에 10을 더하는 함수
  const promise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
      
      if(typeof num === 'number'){
        resolve(num + 10);
      }else{
        reject("num은 숫자가 아니올시다");
      }

    },1000)
    
  });
  return promise;
}
// add10(0).then(콜백함수); 성공하고 나면, 콜백함수를 적용
// add10(0).catch(콜백함수); 실패하고 나면, 콜백함수를 적용
// add10(0).then((result)=>{
//   console.log(result);
//   return add10(result);
// }).then((result)=>{
//   console.log(result);
//   return add10(result);
// }).then((result)=>{
//   console.log(result);
// // 콜백함수 지옥에 빠지지 않는다.
//   return add10(undefined);
// }).catch((error)=>{
//   console.log(error);
// })


// 음식 주문
function order(){
  const promise = new Promise((resolve, reject)=>{ //리턴해야 한다.
    setTimeout(()=>{
      const food = "마라탕";
      resolve(food);
    },1000)
  })
  return promise; // 리턴 필수!
}
// 음식 식히기
function cool(food){
  const promise = new Promise((resolve, reject)=>{ 
    setTimeout(()=>{
      const coolFood = `식은 ${food}`;
      resolve(coolFood);
    },1000)
  })
  return promise;
}
// 냉동시키기
function ice(food){
  const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const iceFood = `${food}에게 냉동비임!`
      resolve(iceFood);
    },500)
  })
  return promise;
}

order().then((food)=>{
  console.log(food);
  return cool(food); // promise는 리턴을 해야 한다.
}).then((coolFood)=>{
  console.log(coolFood);
  return ice(coolFood);
}).then((iceFood)=>{
  console.log(iceFood);
})
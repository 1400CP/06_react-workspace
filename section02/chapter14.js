// async
// 함수 앞에 붙이는 키워드
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// function getData(){
//   return {
//     name:"내이름",
//     id:"user01"
//   }
// }

// console.log(getData())



// function getPrint(){ // 비동기인 경우 지맘대로 나아갈 때가 있음
//   let user = getData();
//   console.log(user);
// }

// getPrint();

async function getData(){ // 싱크를 맞춰라라
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({
        name:"내이름",
        id:"user01"
      })
    }, 1500)
  })
}

// await
// async 함수 내부에서만 사용 가능한 키워드
async function printData(){ // 싱크를 맞춰라라
  const data = await getData(); // getData를 기다려라
  console.log(data);
}

printData();
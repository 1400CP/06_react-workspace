import { useState } from "react";

const Bulb=({})=>{
  // const Bulb=({light}) = useState("OFF"); // 객체 형태로 담겨서 옴
  // console.log(light);>{ // 객체 형태로 담겨서 옴

  const [light, setLight] = useState("OFF"); // 문자열도 가능하다
  // 구조분해할당을 사용하면 이렇게 표현 가능

  return (
    // <div>전구</div> 
    <div>{light === "ON"
    ? <h1 style={{backgroundColor : "orange"}}>ON</h1>
    : <h1 style={{backgroundColor : "lightgray"}}>OFF</h1>
    }
    
    <button onClick={()=>{
          setLight(light === "ON" ? "OFF" : "ON"); // 삼항연산자를 활용 (true/false)

          // light === "ON" ? "OFF" : "ON" // 변수를 사용하면 값은 바뀌었으나, 리렌더링이 안 됨.

        }}>
          {/* 전구끄기 / 전구 켜기 */}
          {light === "ON" ? "전구 끄기" : "전구 켜기"}
    </button>
    
    </div>
  )
}

export default Bulb;



// const Bulb=({})=>{ // 객체 형태로 담겨서 옴
//   // const Bulb=({light})=>{ // 객체 형태로 담겨서 옴
//   const [light, setLight] = useState("OFF");
//   // console.log(light);

//   return (
//     // <div>전구</div> 
//     <div>{light === "ON"
//     ? <h1 style={{backgroundColor : "orange"}}>ON</h1>
//     : <h1 style={{backgroundColor : "lightgray"}}>OFF</h1>
//     }
    
//     <button onClick={()=>{
//           setLight(light === "ON" ? "OFF" : "ON"); // 삼항연산자를 활용 (true/false)

//           // light === "ON" ? "OFF" : "ON" // 변수를 사용하면 값은 바뀌었으나, 리렌더링이 안 됨.

//         }}>
//           {/* 전구끄기 / 전구 켜기 */}
//           {light === "ON" ? "전구 끄기" : "전구 켜기"}
//     </button>
    
//     </div>
//   )
// }



// 고치려고 했는데 실패한 작품, 뭐가 잘못된 걸까?? 어차피 useState 하려고 했던 거니까 버려도 되지만...
// const Bulb=({light})=>{ // 객체형태로 담겨서 옴
//   console.log(light);
//   return (
//     <div>
//         <div>{light === "ON"
//         ? <h1 style={{backgroundColor : "orange"}}>ON</h1>
//         : <h1 style={{backgroundColor : "lightgray"}}>OFF</h1>
//         }</div>

//         <button onClick={(light)=>{
//           light === "ON" ? "OFF" : "ON"
//         }}>
//           전구끄기 / 전구 켜기
//           {light === "ON" ? "전구 끄기" : "전구 켜기"}
//         </button>
//     </div>
//   )
// }
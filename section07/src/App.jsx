import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState, useEffect, useRef } from "react"
import Even from './components/Even'

function App() {
  const [count, setCount] = useState(0); // 이때 viewer에게 줄 props가 필요함

  const [input, setInput] = useState(""); // 일반적으로는 빈 문자를 넣는 경우가 많다.

  const isMount = useRef(false); // 부가효과
  // useEffect(콜백함수, 배열)

  // useEffect(()=>{
  //   console.log(`count : ${count}`);
  // }, [count])
  
  // 의존성 배열
  // dependency array
  // deps

  // useEffect(()=>{
  //   console.log(`count : ${count}`);
  // }, [count])

  // useEffect(()=>{
  //   console.log(`count : ${count}`);
  // }, [count, input])
  // input을 추가하면 콘솔에 input 값을 넣을 때마다 콘솔에 계속 들어간다.
  // 동기 방식인 이것을 사용한다. 

  // const onClickButton = (value)=>{ // onClick 함수
  //   setCount(count + value); // 비동기 함수, 순서를 지키지 않는다.
  //   console.log(count); // 한박자 느린 이유? => 비동기 방식이기 때문에 그러하다.
  // } // 비동기 함수인 경우 한박자 늦기 때문에 작업이 오래 걸리게 된다.

  // 1. 마운트 : 탄생
  useEffect(()=>{
    console.log("mount")
  }, [])

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{ // 배열 생략
    // console.log(isMount); // 초기값 false로 짰음
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  })

  // 3. 언마운트 : 죽음
  // useEffect(콜백,배열)
  // Even에 들어가야 한다.



// 리액트의 컴포넌트가 마운트 : 데이터를 조회하라는 코드
// 리액트가 렌더링 되면 : 수정된 데이터가 유효한지 검사하는 코드
// 리액트가 언마운트 되면 : 메모리를 싹 비우는 최적화 코드






  const onClickButton = (value)=>{ // onClick 함수
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>

      <section>
        {/* 타입을 안 적으면 그냥 text가 된다. */}
        <input value={input} onChange={(e)=>{ // 이벤트 핸들러는 e값을 가지고 있음
          setInput(e.target.value);
        }} />
      </section>


{/* 라이프사이클 */}
      <section>
        {/* props 할당 */}
        {/* Viewer count={props} */}
        <Viewer count={count} />
        <Even />
      </section>
{/* 라이프사이클 */}


      
      <section>
        {/* count, setCount 둘 다 줘도 된다 */}
        {/* onClick으로 가자 */}
        <Controller onClickButton={onClickButton} />
      </section>
      
    </div>
  )
}

export default App

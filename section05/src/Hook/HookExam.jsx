import { useRef } from "react";
import { useState } from "react";

// 3가지 Hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 컴포넌트 내부에서만 호출 가능
// 2. 조건부로 호출 불가
// 3. 나만의 훅(customHook)을 만들 수 있음

// function getInput(){ // 컴포넌트가 아니라서 불가능합니다.
function useInput(){ // 나만의 Hook이 된다.
  const [input, setInput] = useState("");

  const onChange=(e)=>{
    setInput(e.target.value)
  }

  return [input, onChange];

}

const HookExam=()=>{

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  // const [input, setInput] = useState("");

  // const onChange=(e)=>{
  //   setInput(e.target.value)
  // }

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  )

}

export default HookExam;
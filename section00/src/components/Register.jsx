import { useState, useRef } from "react";
import List from "./List";

const Register = ({onCreate}) => { // 함수 다음에 이벤트 핸들러

  const [input, setInput] = useState({
    no : "",
    name : "",
    home : "서울",
    birth : "",
  });

  const onChangetContent = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
  }


  const onSubmit = ()=>{
    if(input.name == "" && input.birth == ""){ // 아무것도 입력x
      return;
    }
    onCreate({...input});
    setInput("");
  }

  return(
    <>
      <h1>내 친구를 소개합니다</h1>
      <div>
        이름 : <input name="name" value={input.name} onChange={onChangetContent}/>
      </div>
      <div>
        사는곳 : 
        <select name="home" value={input.home} onChange={onChangetContent}>
          <option>서울</option>
          <option>인천</option>
          <option>부산</option>
        </select>
      </div>
      <div>
        생일 : <input type="date" name="birth" value={input.birth} onChange={onChangetContent}/>
      </div>

      <button className="friendButton" onClick={onSubmit} >친구 추가</button>

    </>
  )

}

export default Register
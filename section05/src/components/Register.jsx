import { useRef, useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// 계속 입력을 받는 방법이다. 순서대로 잊지 말고 할 것.
// 1. 객체 만들고(const), 2. 함수 만들고(set), 3. onChange 만들고, 3-1 이벤트 만들고(e), 4. value

const Register=()=>{
  
  const CountRef = useRef(0); // 초기값
  const inputRef = useRef();
  console.log(CountRef);

  const[input, setInput] = useState({ // 객체 배열로 만들기
    name:"",
    birth:"",
    country:"",
    bio:"",
  });

    // 이벤트 핸들러
    const onChange=(e)=>{ // 리렌더링중
      setInput({ // 스프레드 문법
        ...input,
        [e.target.name] : e.target.value // ; 찍으면 안 돼!
      });
    }

    console.log(input)

  // const[name, setName] = useState("이름");
  // const[birth, setBirth] = useState("");
  // const[country,setCountry] = useState("");
  // const[bio, setBio] = useState("");


  // const onSubmit =(e)=>{
  //   if(input.name === "name"){
  //     inputRef,
  //     [e.target.name] : e.target.value

  //   }
  // }


  // const onChangeName = (e)=>{
  //   setName(e.target.value);
  // }

  // const onChageBirth = (e)=>{
  //   setBirth(e.target.value);
  // }

  // const onChangeCountry = (e)=>{
  //   setCountry(e.target.value);
  // }

  // const onChangeBio = (e)=>{
  //   setBio(e.target.value);
  // }


  return(
    <div>

      <button onClick={()=>{ // 리렌더링이 되지 않음.
        CountRef.current++;
        console.log(CountRef.current);
      }}>ref+1</button>

      <h1>하이, 어서옵셔</h1>

      <input ref={inputRef} name="name" placeholder="이름" value={input.name} onChange={onChange}/>


      <div>
        <input name="birth" value={input.birth} type="date" onChange={onChange}/>
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="x"></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="eu">영국</option>
        </select>
      </div>

      <div>
        <textarea ref={inputRef} name="bio" value={input.bio} onChange={onChange}/>
      </div>

      <button onClick={onsubmit}>제출</button>

    </div>
  )
}

export default Register;

// 리액트에서 사용자의 입력을 받는 방법
// 1. 값을 저장하기 위해 state를 만들기. (import)
// 2. 해당 요소가 변경될 떄마다 (onChange) 해당 state를 변경해주는 이벤트 핸들러를 만들기.
// 3. 해당 요소의 onChange 속성에 해당 이벤트 핸들러 연결하기.
// 4. value도 잘 쓰기.



      /* <h1>하이, 어서옵셔</h1>

      <input name="name" placeholder="이름" value={input.name} onChange={onChange}/>


      <div>
        <input name="birth" value={input.birth} type="date" onChange={onChange}/>
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="x"></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="eu">영국</option>
        </select>
      </div>
      
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}/>
      </div>

      <button onClick={onsubmit}>제출</button>

    </div> */


    // <div>
    //   <h1>하이, 어서옵셔</h1>

    //   <input name="name" placeholder="이름" value={input.name} onChange={onChange}/>


    //   <div>
    //     <input name="birth" value={input.birth} type="date" onChange={onChange}/>
    //   </div>

    //   <div>
    //     <select name="country" value={input.country} onChange={onChange}>
    //       <option value="x"></option>
    //       <option value="kr">한국</option>
    //       <option value="us">미국</option>
    //       <option value="eu">영국</option>
    //     </select>
    //   </div>
      
    //   <div>
    //     <textarea name="bio" value={input.bio} onChange={onChange}/>
    //   </div>

    // </div>


  //   <div>
  //     <h1>하이, 어서옵셔</h1>

  //     <input placeholder="이름" value={name} onChange={onChangeName}/>
    

  //   <div>
  //     <input value={birth} type="date" onChange={onChageBirth}/>
  //   </div>

  //   <div>
  //     <select value={country} onChange={onChangeCountry}>
  //       <option value="x"></option>
  //       <option value="kr">한국</option>
  //       <option value="us">미국</option>
  //       <option value="eu">영국</option>
  //     </select>
  //     {country}
  //   </div>
    
  //   <div>
  //     <textarea value={bio} onChange={onChangeCountry} />
  //   </div>

  // </div>
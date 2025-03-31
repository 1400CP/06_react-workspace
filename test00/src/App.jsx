import { useState } from 'react'
import './App.css'

function App() {

  const [userList, setUserList] = useState([
    {
      name:"유저1",
      age: 24,
      gender: "남자",
      phone: "010-2723-2241",
    },
    {
      name: "유저2",
      age: 27,
      gender: "여자",
      phone: "010-2674-0093",
    },
    {
      name: "유저3",
      age: 30,
      gender: "남자",
      phone: "010-3784-2834",
    }
  ])

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const registUser = () => {

    const user = {name, age, gender, phone} ;
    
    // userList.push(user); // 푸쉬를 하면 틀리지
    // user를 가지고 오고 싶으면 함수를 사용해야지, 바로 아래에 있네.
    
    setUserList([...userList]);
    setName(user.name);
    setAge(user.age);
    setGender(user.gender);
    setPhone(user.phone);

  };



  return (
    <div className="App">

      <h1>회원 정보 출력</h1>

      <hr></hr>

      <table className="member_tbl">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
          </tr>
        </thead>


        <tbody>
        {userList.map((user) => {
          <User key={"user" + user} />;
        })}
        </tbody>
      </table>
    

      <div className="regist-wrap">
      
        <h3>회원 정보 등록</h3>
        
        <hr></hr>
        
        <InputWrap text="이름" data={name} setData={setName} />
        <InputWrap text="나이" data={age} setData={setAge} />
        <InputWrap text="성별" data={gender} setData={setGender} />
        <InputWrap text="전화번호" data={phone} setData={setPhone} />
        
        <button onClick={registUser}>회원등록</button>
    
      </div>
    
    </div>
    );
}  

const User = (props) => {
  const user = props.user;
    
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.phone}</td>
      </tr>
    );
};

const InputWrap = (props) => {
  const text = props.text;
  const data = props.data;
  const setData = props.setData;
  
  
  const changeInputValue = (e) => {
    setData(e.target.value);
  };
  
  return (
    <div className="input_wrap">
      <label>{text}</label>
      <input type="text" value={data} onChange={changeInputValue} />
    </div>
  );
};

export default App;
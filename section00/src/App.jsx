import './App.css'
import { useState, useRef } from "react"
import Register from './components/Register'
import List  from './components/List'
import Friend from './components/Friend'

function App() {

  const friendData = [
    {
      no: 0,
      name: '차은우',
      home: '서울',
      birth: '1999-01-01',
    },
    {
      no: 1,
      name: '주지훈',
      home: '인천',
      birth: '1999-01-02',
    },
    {
      no: 2,
      name: '장원영',
      home: '부산',
      birth: '1999-01-03',
    },
  ]

  const [friends, setFriends] = useState(friendData);
  const friRef = useRef(3);

  const onCreate = ({name, home, birth}) => {
    const newFriend = {
      no: friRef.current++,
      name : name,
      home : home,
      birth : birth
    }
    setFriends([newFriend, ...friends]);
  }


  const onDelete = (friend)=>{
    setFriends(friends.filter((friendss)=>{
      return friendss.no !== friend;
    }))
  }


  return (
    <div className='App'>
      <Register onCreate={onCreate} />
      <List friends={friends} onDelete={onDelete} />
    </div>
  )
}

export default App

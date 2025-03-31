import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'
import Bulb from './components/Bulb'
import Counter from './components/Counter'
import Register from './components/Register'
import HookExam from './Hook/HookExam'


// 리액트에서 화면이 리렌더링 되는 상황은 3가지가 있다
// 1. 자신이 관리하는 state의 값이 변경됐을 때
// 2. 제공받는 props의 값이 변경될 때
// 3. 부모 컴포넌트가 리렌더링되면 자식 요소들 모두 리렌더링 됨

function App() { // 부모 컴포넌트

  return (
    <>
      <Bulb/>
      <Counter/>
      {/* ref={inputRef}, 이게 핵심이네*/}
      <Register/>
      <HookExam/>
    </>
  )
}

export default App


// const Header = () => { // 함수형 컴포넌트
//     return(
//       <header>
//         <h1>header</h1>
//       </header>
//     )
// }

// function App() { // 부모 컴포넌트
  // const buttonProps = {
  //   text : "메일",
  //   color : "red",
  //   a : 1,
  //   b : 2,
  //   c : 3
  // }

//   return (
//     <>
//       {/* 자식 컴포넌트
//       <Header/> 
//       <Main/>
//       <Footer/>

//       {/* <Button text={"메일"} color={"red"} a={1} /> */}
//       {/* 스프레드 문법 */}
//       {/* <Button {...buttonProps}/> 
//       <Button text={"카페"}/>
//       <Button text={"블로그"}>
//         <div>자식놈</div>
//         <Header/>
//       </Button> */} */}

//     </>
//   )
// }

// export default App
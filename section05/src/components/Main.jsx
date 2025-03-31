// JSX
// 1. 중괄호 내부에서는 자바스크립트 표현식(값)만 넣을 수 있다.
// => if문이나 for문은 중괄호 안에서 사용 불가. 값으로써 평가되는 것만 가능.
// 2. 숫자, 문자열, 배열값만 렌더링 가능. (Boolean, undefined, null 불가)
// 3. 모든 태그는 닫혀있어야 한다. <img/> 셀프 클로징
// 4. 최상위 태그가 여러 개일 경우 오류가 남. 병렬배치 불가. 빈태그로 최상위 태그는 가능.
// 5. 클래스를 주기 위해서는 className으로 줘야 한다.

import "./Main.css"

const Main = () => {
  const user = {
    name:"나",
    isLogin : false,
  }
  
    if(user.isLogin){
      return (
        <div className="login">로그아웃</div>
      )
    }else{
      return(
        <div className="login">로그인</div>
      )
    }

  // return (
  //  <>
      {/* {user.isLogin === true ? "로그아웃" : "로그인"} */}
  // </>
  // )

  // const number = 9;
  // const obj = {
  //   name : "나나"
  // };

  // return (
  //   <main>
  //     <h1>main</h1>
  //     {number % 2 == 0 ? "짝수" : "홀수"}
  //     {obj.name}
  //     {/* 안 나오는 것 */}
  //     {obj}
  //     {null}
  //     {true}
  //   </main>
  // )
}

export default Main;
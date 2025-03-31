// const Button = ({children, text, color = "black"}) => { // 자식을 넣어서 설정 가능, default 값 설정이 가능하다.

//   return (
//     // <button style={{color:color}}>
//     //   {text} - {color.toUpperCase()}
//     //   {children}
//     // </button>
//   )
// }

const Button = ({children, text, color = "black"}) => {

  const onClickButton = (e) => {
    console.log(e);
    // 합성 이벤트 객체 : 모든 브라우저에서 사용할 수 있는 통합 이벤트 객체.
  }

  return (
    <button 
      onClick={onClickButton}
      onMouseEnter={onClickButton}
      style={{color:color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}

export default Button;
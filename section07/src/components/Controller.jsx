const Controller=({onClickButton})=>{ // 객체가 온다, 이번에는 함수.
  return(
    <div>
      <button onClick={()=>{
        onClickButton(-1)
      }}>-1</button>
      <button onClick={()=>{
        onClickButton(-10)
      }}>-10</button>
      <button onClick={()=>{
        onClickButton(-100)
      }}>-100</button>
      <button onClick={()=>{
        onClickButton(+100)
      }}>+100</button>
      <button onClick={()=>{
        onClickButton(+10)
      }}>+10</button>
      <button onClick={()=>{
        onClickButton(+1)
      }}>+1</button>
    </div>

  )

}
export default Controller
import "./Header.css"

const Header=()=>{
  return(
    <div className="Header">
      <h3>오늘은 😑</h3>
      <h1>{new Date().toDateString()}</h1>
      {/* 타임스탬프를 사용하면서 정확한 시간 때를 만들 수 있다. */}
    </div>

  )

}

export default Header;
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0); // 이때 viewer에게 줄 props가 필요함

  const onClickButton = (value)=>{ // onClick 함수
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>

      <section>
        {/* props 할당 */}
        {/* Viewer count={props} */}
        <Viewer count={count} />
      </section>
      
      <section>
        {/* count, setCount 둘 다 줘도 된다 */}
        {/* onClick으로 가자 */}
        <Controller onClickButton={onClickButton} />
      </section>
      
    </div>
  )
}

export default App

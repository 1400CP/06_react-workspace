import { useState } from "react";

const Counter=({})=>{
  const [count, setCount] = useState(0);
  
  return(
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{
          // setState(바꿀값)
          setCount(count+1);
        }}>+</button>
    </div>
  )
}

export default Counter;


      {/* <div>
        <h1>{count}</h1>
        <button onClick={()=>{
          // setState(바꿀값)
          setCount(count+1);
        }}>+</button>
      </div> */}
import { useState } from "react"
import List from "./List"

const Friend = ({no, name, home, birth, onDelete}) => {

  const onClickButton = ()=>{
    onDelete(no);
  }


  return(
    <>
      <tr className="Friend">
        <td>{no}</td>
        <td>{name}</td>
        <td>{home}</td>
        <td>{birth}</td>
        <td><button onClick={onClickButton}>삭제</button></td>
      </tr>


    </>
  )





}

export default Friend
import Friend from "./Friend"

const List = ({friends, onDelete}) => {




  return(
    <>
      <h3>친구리스트</h3>

      <table className="List">
        <thead>
          <tr>
            <th> 번호 </th>
            <th> 이름 </th>
            <th> 사는곳 </th>
            <th> 생일 </th>
            <th>  </th>
          </tr>
        </thead>
        <tbody>
         {friends.map((m)=>{
            return <Friend {...m} onDelete={onDelete} />
          })}
        </tbody>

      </table>

    </>
  )

}


export default List
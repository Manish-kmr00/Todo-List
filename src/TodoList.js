import '../src/TodoList.css'
import { useState } from 'react'
import { Fragment, default as React } from 'react'





const TodoList = () => {

  const [activity, setActivity] = useState("")
  const [listData, setlistData] = useState([])

  function addActivity() {
    setlistData((listData) => {
      const updatedlist = [...listData, activity]
      console.log(updatedlist)
      setActivity("")
      return updatedlist
    })
  }

  function removeActivity(i) {
    const updatedlistData = listData.filter((elem, id) => {
      return i !== id;
    })
    setlistData(updatedlistData)
  }


  return (

    <Fragment>

      <div className='container'>
        <div className='header'>Todo List</div>
        <input type="text" placeholder='add activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
        <button onClick={addActivity}> Add</button>
        <p > Here is your list : {")"}</p>
        {listData !== [] && listData.map((data, i) => {
          return (
            <div  className='listData'>
              <p key={i}>
                <div className='list' >{data}</div>
                <div> <button onClick={() => removeActivity(i)}>remove(-)</button>  </div>
              </p>
            </div>

            )
        })}
      </div>

    </Fragment>


  )
}

export default TodoList;
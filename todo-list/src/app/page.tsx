'use client';
import { useState } from "react";

export default function Home() {
  const [input, setInput]: any = useState('');
  const [task, setTask]: any = useState([]);
  const [style, setStyle] = useState("not-done")

  const changeStyle = () => {
    if (style !== "done") {
      setStyle("done")
    } else {
      setStyle("not-done")
    }
  }

  console.log(task)
  return (
    <div className='container flex flex-col items-center'>
      <h1 className='text-7xl mt-6'>todo list</h1>
      <input type="text" name="task" id="task" value={input} style={{ width: "50%", padding: "10px", color: 'black' }} placeholder="what needs to be done?" onChange={(event) => {
        setInput(event.target.value)
      }} />
      <button onClick={() => {
        setTask([...task, input])
        setInput("")
      }}>add task</button>


      <ul className="mt-5">
        {task.map((todo: any, key: any) => {
          return (
            <li className={style} onDoubleClick={changeStyle} key={key}>{todo}</li>
          )
        })}

      </ul>


    </div>
  )
}

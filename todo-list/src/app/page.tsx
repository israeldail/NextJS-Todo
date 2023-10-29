'use client';
import { useState } from "react";
import { TodoItem } from "@/components/todoItem";

export default function Home() {
  const [input, setInput]: any = useState('');
  const [task, setTask]: any = useState([]);
  let uniqueId: number = 0;

  const deleteTask = (index: any) => {
    let reduced = [...task];
    reduced.splice(index, 1)

    setTask(reduced)
  }

  console.log(task)
  return (
    <div className='container flex flex-col items-center mx-auto mt-[2rem]'>
      <input type="text" name="task" id="task" value={input} style={{ width: "50%", padding: "10px", color: 'black', borderRadius: "10px" }} placeholder="what needs to be done?" onChange={(event) => {
        setInput(event.target.value)
      }} />
      <button className='mt-5 h-10 w-1/4 rounded-md bg-blue-500 hover:bg-blue-700' onClick={() => {
        setTask([...task, input])
        setInput("")
      }}>add task</button>


      <ul className="mt-5">
        {task.map((todo: any, key=uniqueId++) => {
          return (
            <div className='flex flex-row'>
              <li><TodoItem todo={todo} key={key}/></li>
              <span className={`flex flex-row justify-center items-center ml-2 h-[50px] w-[50px] mt-[1rem] bg-white text-black rounded-md hover:cursor-pointer hover:bg-red-700`} onClick={() => deleteTask(key)}>&#10005;</span>
            </div>
          )
        })}

      </ul>


    </div>
  )
}

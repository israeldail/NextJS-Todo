'use client';
import { useState } from "react";
export const TodoItem = ({ todo }: any) => {
    const [style, setStyle] = useState("not-done")

    const changeStyle = () => {
        if (style !== "done") {
            setStyle("done")
        } else {
            setStyle("not-done")
        }
    }
    return (
        <div className={`flex flex-row justify-center items-center h-[50px] w-[400px] bg-white mt-[1rem] z-0 rounded-md hover:cursor-pointer ${style}`}  onClick={changeStyle}>
            <h1 className='z-1 text-black'>{todo}</h1>
        </div>
        
    )
}


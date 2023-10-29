'use client';
import { Fragment, useState } from "react";
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
        <div className='flex flex-row justify-center items-center'>
            <div className={`flex flex-row justify-center items-center h-[50px] w-[400px] bg-white mt-[1rem] z-0 rounded-md`}>
                <h1 className='z-1 text-black'>{todo}</h1>
            </div>
            <div className={`flex flex-row justify-center items-center ml-2 h-[50px] w-[50px] mt-[1rem] bg-white text-black rounded-md hover:bg-green-700 hover:cursor-pointer ${style}`} onClick={changeStyle}>&#10003;</div>
        </div>
    )
}


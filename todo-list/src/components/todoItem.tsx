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
        <div className={style} onDoubleClick={changeStyle}>{todo}</div>
    )
}


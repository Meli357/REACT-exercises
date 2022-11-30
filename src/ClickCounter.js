import React, { useState } from "react";

export function ClickCounter({initialValue=0}){
    const [counter,setCounter]=useState(initialValue)

    function handleCounterAdd(){
        setCounter(counter + 1)
    }

    return(<div>
        <h3>Count:{counter}</h3>
        <button onClick={handleCounterAdd}>Add</button>
    </div>)
}
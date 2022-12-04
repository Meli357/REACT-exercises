import React, { useEffect, useState } from "react";

export function ClickCounter(props,{initialValue=0}){
    const [counter,setCounter]=useState(initialValue)

    function handleCounterAdd(){
        setCounter(counter + 1)
    }

    useEffect(()=>{
        props.onCounterChange(counter) ; 
    },[counter])

    return(<div>
        <h3>Count:{counter}</h3>
        <button onClick={handleCounterAdd}>Add</button>
    </div>)
}

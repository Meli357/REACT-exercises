import React, { useEffect, useState } from "react";

export function useClickCounter(initialValue=0){
    const[counter,setCounter]= useState(initialValue)

    function handleCounterAdd(){
        setCounter((c)=>c+1)
    }

    function handleCounterUnadd(){
        setCounter((c)=>c-1)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return{
        counter:counter,
        onIncrement:handleCounterAdd,
        onDecrement:handleCounterUnadd,
        onReset:handleCounterReset
    }
} 

export function ClickCounter(props,{initialValue=0}){
    const {counter,onIncrement,onReset,onDecrement}=useClickCounter(initialValue)

    useEffect(()=>{
        props.onCounterChange(counter) ; 
    },[counter])

    return(<div>
        <h3>Count:{counter}</h3>
        <button onClick={onIncrement}>Add</button>
        <button onClick={onReset}>Reset</button>
        <button onClick={onDecrement}>Subtract</button>
    </div>)
}

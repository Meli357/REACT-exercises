import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(){
    const[count,setCount]=useState(0)

    useEffect(()=>{
        const timer = setInterval(()=>
        setCount((lastCount)=>lastCount + 1), 1000);

        return () => {
            clearInterval(timer)
        }
    },[]);

    return(<CounterDisplay count={count}/>);
}

import React from "react";

export function Sum({numbers}){
    return(<h1>Il totale è : {numbers.reduce((initValue,currValue)=>
        initValue + currValue, 0)}
        </h1>)
}


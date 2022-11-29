import React from "react";

export function Sum({numbers=[1,2,3,4]}){
    return(<h1>Il totale è : {numbers.reduce((initValue,currValue)=>
        initValue + currValue, 0)}
        </h1>)
}


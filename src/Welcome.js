import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <p>Welcome, {nameGreet}!</p>
                <Age age={28} />
            </div>
        )
    }
}

const name = "Melissa"
const nameGreet = <strong>{name}</strong>
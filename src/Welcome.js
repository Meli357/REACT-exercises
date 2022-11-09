import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <p>Welcome, {nameGreet}</p>
                {this.props.age && <Age age={this.props.age}/>}
            </div>
        )
    }
}

const name = "Melissa"
const nameGreet = <p>Welcome, <strong>{name}</strong>!</p>
import React from "react";

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <p>Welcome, {nameGreet}</p>
                <p>"Your age is {this.props.age}"</p>
            </div>
        )
    }
}

const name = "Melissa"
const nameGreet = <p>Welcome, <strong>{name}</strong>!</p>

Welcome.defaultProps={
    // name: "Melissa",
    age: 28
}
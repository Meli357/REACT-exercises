import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { ClickTracker } from "./ClickTracker";

export class App extends React.Component{
    render(){
        return(
            <div>
                <Hello />
                <Welcome age={28} name={"John"}/>
                <Counter />
                <ClickCounter />
                <ClickTracker />
            </div>
        )
    }
}
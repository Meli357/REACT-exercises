import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";

export class App extends React.Component{
    render(){
        return(
            <Container>
                {/* <Hello /> */}
                <Welcome age={28} name={"John"}/>
                {/* <Counter />
                <ClickCounter />
                <ClickTracker /> */}
                {/* <InteractiveWelcome /> */}
                <Login />
                {/* <UncontrolledLogin />
                <TodoList /> */}
            </Container>
        )
    }
}
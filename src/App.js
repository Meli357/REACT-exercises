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
            <Container title="My app" >
                {/* <Hello /> */}
                <Welcome age={28} name="John"/>
                {/* <Counter />
                <ClickCounter />
                <ClickTracker /> */}
                {/* <InteractiveWelcome /> */}
                {/* <Login /> */}
                {/* <UncontrolledLogin /> */}
                <TodoList>
                    {(items, handleItem)=> {
                     return(<div>
                        {items.map((item, index)=><li key={index}>{item} 
                        <button onClick={handleItem.bind(this, index)}>
                        delete me!</button></li>)}
                        </div>)}}
                </TodoList>
            </Container>
        )
    }
}
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
import { Language } from "./Language";
import { Sum } from "./Sum";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubList";
import { CarDetails } from "./CarDetails";

export class App extends React.Component{
    render(){
        return(
            <div>
            <Language />
            <Container title="My app">
                {/* <Hello /> */}
                <Welcome age={28} name="John"/>
                
                {/* <Counter /> */}
                <ClickCounter onCounterChange={(counter)=> {
                    return console.log("The value of the counter is " + counter)}}/>
                {/* <ClickTracker /> */}
                {/* <InteractiveWelcome /> */}
                <br></br>
                {/* <Login /> */}
                {/* <UncontrolledLogin /> */}
                {/* <TodoList render={(items, handleItem)=> {
                    return(<div>
                        {items.map((item, index)=><li key={index}>{item} 
                        <button onClick={handleItem.bind(this, index)}>
                        delete me!</button></li>)}
                        </div>)}}>
                </TodoList> */}
                <GithubUserList />
                <GithubUser username="Meli357"/>
                <CarDetails initialData={{model: 'Mercedes', year: '2008', color: 'black'}}/>
                {/* <Sum /> */}
                <br></br>
            </Container>
            </div> 
        )
    }
}
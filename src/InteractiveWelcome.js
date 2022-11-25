import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state={
        username: ''
    }

    handleInput = (event) => {
        const value = event.target.value
        this.setState({
            username : value
        })
    }
    render(){
        return(
            <>
            <input name="username" value={this.state.username} onChange={this.handleInput} />
            <Welcome name={this.state.username}/>
            </>
        )
    }
}
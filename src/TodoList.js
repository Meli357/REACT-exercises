import React from "react";

export class TodoList extends React.Component{
    state={
        items:["gray","purple","brown"]
    }

    handleInput = (event) => {
        const value = event.target.value
        this.setState({
            input : value
        })
    }

    handleBtn = (event) => {
        const value = event.target.value
        this.setState({
            input : value
        })
        this.state.items.push(this.state.input)
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.items.map((item, index)=>
                    <li key={index}>{item}</li>)}
                </ul>
                <input name="input" value={this.state.input} onChange={this.handleInput}/>
                <button onClick={this.handleBtn}>add a new color!</button>
            </div>
        )
    }
}
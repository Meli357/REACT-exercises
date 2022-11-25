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

    handleReset = () => {
        this.setState({
            items : []
        })
    }
    
    handleItem = (index) =>{
        this.setState({
            items: this.state.items.filter(function(e,i){
                return i !== index;
            })
        });
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.items.map((item, index)=>
                    <li key={index}>{item} <button onClick={this.handleItem.bind(this, index)}>delete me!</button></li>)}
                </ul>
                <input name="input" value={this.state.input} onChange={this.handleInput}/>
                <button onClick={this.handleBtn}>add a new color!</button>
                <button onClick={this.handleReset}>delete colors!</button>
            </div>
        )
    }
}
import React from "react";

export class ClickCounter extends React.Component{
    state ={
        count:0
    }
    handleClickCounter =()=>{
        this.setState((state)=>{
            return{
                count:state.count + 1,
            }
        })
    }
    render(){
        return(
            <div>
                <h3>Count : {this.state.count}</h3>
                <button onClick={this.handleClickCounter}>Add</button>
            </div>
        )
    }
}
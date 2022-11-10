import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state={
        count: this.props.initialValue,
    }
    constructor(props){
        super(props)

        setInterval(() => {
            this.setState((state)=>{
                return{
                    count:state.count + (this.props.incAmount),
                }
            })
            }, this.props.incInterval)
    }
    render(){
        return <CounterDisplay count={this.state.count}/>
    }
}

Counter.defaultProps={
    initialValue: 1,
    incAmount: 2,
    incInterval: 1000,
}
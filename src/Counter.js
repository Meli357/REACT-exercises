import React from "react";

export class Counter extends React.Component{
    state={
        count:0,
    }
    constructor(props){
        super(props)

        setInterval(() => {
            this.setState((state)=>{
                return{
                    count:state.count + 1,
                }
            })
            },1000)
    }
    render(){
        return <h1>Counter : {this.state.count}</h1>
    }
}

// if next value of state doesn't depend on 
// current value of state use object:
//     this.setState({count: this.state.count + 1})
// }, 1000);
// otherwise use callback as the parameter
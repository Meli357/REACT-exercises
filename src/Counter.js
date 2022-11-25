import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state={
        count: this.props.initialValue,
    }
    
    // constructor(props){
    //     super(props)}
        
    componentDidMount(){
        this._interval = setInterval(() => {
            this.setState((state)=>{
                return{
                    count:state.count + (this.props.incAmount),
                }
            })
            }, this.props.incInterval)
    }

    componentWillUpmount(){
        clearInterval(this._interval);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count > 10*this.props.initialValue){
            this.setState({count : this.props.initialValue})
        }
    }

    render(){
        const Style = {
            color : '#B5523D',
            backgroundColor : '#FFA07A',
            padding : '5px',
            textAlign : 'center',
        }
        return (< div style={Style}>
        <CounterDisplay count={this.state.count}/>
        </div>)
    }
}

Counter.defaultProps={
    initialValue: 1,
    incAmount: 2,
    incInterval: 1000,
}
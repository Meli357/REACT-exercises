import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <Button variant="success" onClick={this.handleClickCounter}>Add</Button>{' '}
            </div>
        )
    }
}
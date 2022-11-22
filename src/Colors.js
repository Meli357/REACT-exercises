import React from "react";

export class Colors extends React.Component{
    render(){
        return <ul>
            {this.props.names.map((name)=>(<li>{name}</li>))}
        </ul>
    }
}
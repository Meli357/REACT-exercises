import React from "react";

export class Colors extends React.Component{
    render(){
        return <ul>
            {this.props.items.map((name)=>(<li>{name}</li>))}
        </ul>
    }
}
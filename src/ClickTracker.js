import React from "react"

export class ClickTracker extends React.Component{

    handlerButtons = (event) => {
        
        const newH1 = document.createElement('h1');
        document.body.appendChild(newH1);

        newH1.innerHTML = event.target.innerText;
         
        console.log(event.target)
        console.log(newH1)
        };
   
    render(){
        return(
            <div>
                <button onClick={this.handlerButtons}>First</button>
                <button onClick={this.handlerButtons}>Second</button>
                <button onClick={this.handlerButtons}>Third</button>
            </div>
        )
    }
}
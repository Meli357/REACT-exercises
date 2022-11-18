import React from "react"

export class ClickTracker extends React.Component{

    handlerButtons = (event) => {
        
        const newH1 = document.createElement('h1');
        document.body.appendChild(newH1);

        newH1.innerHTML = event.target.alt;
         
        console.log(event.target)
        console.log(newH1)
        };
   
    render(){
        return(
            <div>
                <button onClick={this.handlerButtons}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbP205eYYe4LAehxgRA2q8BgXdeY_LXwYSiw&usqp=CAU" alt="blue button"/></button>
                <button onClick={this.handlerButtons}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcggZhILFiBD7XhCViH2uWr-t7XZUUdcgyKQ&usqp=CAU" alt="red button"/></button>
                <button onClick={this.handlerButtons}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_WUe6xqw_jeDTxT2Eml3D-MhAgCf7NZcEA&usqp=CAU" alt="yellow button"/></button>
            </div>
        )
    }
}

// we add an alt property inside img so it can be returned by the event handler
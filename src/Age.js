import React from "react";

export class Age extends React.Component{
    render(){
        return <>
            {this.props.age>18
            ?<p>"Your age is {this.props.age}"</p>
            :<p>"You are very young!"</p>} 
            </>
    }
}

// export function Age({age}){
//     return(<div>
//         {age>18
//         ?<p>"Your age is {age}"</p>
//         :<p>"You are very young!"</p>}
//     </div>)
// }
import React from "react";
import { Hello } from "./Hello";

export class App extends React.Component{
    render(){
        return(
            <div>
                <Hello />
                <Hello />
            </div>
        )
    }
}

// se inserisco l'Hello component più di una volta
// dentro l'App component viene reso la quantità di 
// volte che è stato inserito
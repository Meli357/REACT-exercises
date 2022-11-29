import React from "react";
import { LanguageContext } from "./Language";

const strings={
    en: {VERSION:"English version"},
    it: {VERSION:"Italian version"},
    es: {VERSION:"Spanish version"},
}
export class DisplayLanguage extends React.Component{
    render(){
        return(<div>
            <LanguageContext.Consumer>
                {language =>{
                    return(<h1>
                        {strings[language].VERSION}
                    </h1>)
                }}
            </LanguageContext.Consumer>
        </div>)
    }
}
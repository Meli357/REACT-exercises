import React from "react";
import { LanguageContext } from "./Language";
import { useContext } from "react";

// const strings={
//     en: {VERSION:"English version"},
//     it: {VERSION:"Italian version"},
//     es: {VERSION:"Spanish version"},
// }
export function DisplayLanguage(){
    const language = useContext(LanguageContext)
        return(<div>
            {/* <LanguageContext.Consumer>
                {language =>{
                    return(<h1>
                        {strings[language].VERSION}
                    </h1>)
                }}
            </LanguageContext.Consumer> */}
            <h3>Current language:{language}</h3>
        </div>)
    
}
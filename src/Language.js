import React from 'react'
import { useState } from 'react'
import {createContext} from 'react'
import { DisplayLanguage } from './DisplayLanguage'

export const LanguageContext = createContext('en')
export function Language(){
    const[language, setLanguage]=useState('en')
    // state={
    //     language:"en"
    // }

    function handleChangeLanguage(event){
        setLanguage(event.target.value)
    }
    // handleLanguage=(event)=>{
    //     this.setState({
    //         language: event.target.value
    //     })
    // }
    
        return (<div>
            <select value={language} onChange={handleChangeLanguage}>
                <option value="en">ENGLISH</option>
                <option value="it">ITALIAN</option>
                <option value="es">SPANISH</option>
            </select>
            <LanguageContext.Provider value={language}>
            <DisplayLanguage />
            </LanguageContext.Provider>
        </div>)
    
}

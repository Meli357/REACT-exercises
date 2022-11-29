import React from 'react'
import {createContext} from 'react'
import { DisplayLanguage } from './DisplayLanguage'

export const LanguageContext = createContext('en')
export class Language extends React.Component{
    state={
        language:"en"
    }
    handleLanguage=(event)=>{
        this.setState({
            language: event.target.value
        })
    }
    render(){
        return (<div>
            <select value={this.state.language} onChange={this.handleLanguage}>
                <option value="en">ENGLISH</option>
                <option value="it">ITALIAN</option>
                <option value="es">SPANISH</option>
            </select>
            <LanguageContext.Provider value={this.state.language}>
            <DisplayLanguage />
            </LanguageContext.Provider>
        </div>)
    }
}

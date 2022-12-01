import React,{useState} from "react";

export function Login(){
    const[data, setData]= useState({
        username : '',
        password : '',
        remember : false,
        disabled : true
    })

    function handleAllInputs(event){
        const {name,type,value,checked}=event.target
        setData((data) =>{
            return{
                ...data,
            [name]:type === 'checkbox' ? checked : value,
            disabled: data.username === '' && data.password === ''
        }})
    }

    function handleResetBtn(){
        setData({
            username : '',
            password : '',
            remember : false,
        })
    }
    
    console.log(data)

    const StyleBtn ={
                backgroundColor : data.password.length < 8 ? 'red' : 'green',
            }

    return(
    <form>Form : 
        <input onChange={handleAllInputs} value={data.username} name="username" />
        <input onChange={handleAllInputs} value={data.password} name="password" type="password" />
        <input onChange={handleAllInputs} checked={data.remember} name="remember" type="checkbox" />
        <button disabled={data.disabled} style={StyleBtn}>Login</button>
        <button onClick={handleResetBtn}>Reset</button>
    </form>)
}
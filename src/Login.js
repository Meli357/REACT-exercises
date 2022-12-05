import React,{useState} from "react";

export function useLogin(){
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

    function onLogin(){
        console.log(data)
    }
    
    return{
        data:data,
        onInputs:handleAllInputs,
        toResetBtn:handleResetBtn,
        onLogin:onLogin
    }
}

export function Login(){
    const {data,onInputs,toResetBtn,onLogin}=useLogin()

    const StyleBtn ={
                backgroundColor : data.password.length < 8 ? 'red' : 'green',
            }

    return(
    <form>Form : 
        <input onChange={onInputs} value={data.username} name="username" />
        <input onChange={onInputs} value={data.password} name="password" type="password" />
        <input onChange={onInputs} checked={data.remember} name="remember" type="checkbox" />
        <button disabled={data.disabled} style={StyleBtn} onClick={onLogin}>Login</button>
        <button onClick={toResetBtn}>Reset</button>
    </form>)
}
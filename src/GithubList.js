import { useEffect } from "react"
import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList(){
    const [user, setUser]= useState('')
    const [newArray, setnewArray]= useState([])

    function handleInput(event){
        const value = event.target.value
        setUser(value)
    }

    function handleBtn(e){
        e.preventDefault();
        setnewArray([...newArray, user])
    }

    // useEffect(()=>{
    //     console.log(newArray)
    // },[newArray])

    return(<form>
        <input onChange={handleInput} value={user} name="user" />
        <button onClick={handleBtn}>Add Github username: </button>
        <div>{newArray.map((newUser,index)=> <GithubUser key={index} username={newUser} />)}</div>
    </form>)
}
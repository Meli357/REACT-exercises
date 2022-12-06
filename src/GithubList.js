import { useEffect } from "react"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { GithubUser } from "./GithubUser"
import { Link } from "react-router-dom"

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
        <input className="input" onChange={handleInput} value={user} name="user" />
        <button className="btn" onClick={handleBtn}>Add Github username</button>
        {/* <div>{newArray.map((newUser,index)=> 
        <GithubUser key={index} username={newUser} />)}
        </div> */}
        <>
            {newArray.map((newUser)=>
            <h4>
               <Link to={newUser}>{newUser}</Link> 
            </h4>)}
        </> 
        <Outlet />
    </form>)
}
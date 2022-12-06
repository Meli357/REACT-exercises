import { GithubUser } from "./GithubUser"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export function ShowGithubUser(){
    const{username}=useParams()

    return(<div>
        <GithubUser username={username} />
        <Link to="/users">Back</Link>
    </div>)
}
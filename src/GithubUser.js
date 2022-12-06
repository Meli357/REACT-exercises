import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){
    const{data,loading,error,onRefresh}= useGithubUser(username)
    
    return <div>
        {data && <h3>{data.name}</h3>} 
        {loading && <h2>Loading...</h2>}
        {error && <h2>There has been an error</h2>}
        <button className="btn" onClick={onRefresh}>Refresh</button>
        </div>
}
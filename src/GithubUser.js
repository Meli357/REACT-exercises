import { useEffect, useState } from 'react'

export function GithubUser({username}){
    const [data, setData]= useState(null)
    const [loading,setLoading]= useState(false)
    const [error, setError]= useState(null)

    async function fetchGithubUser(username){
        setError(null)
        setLoading(true)

        try{
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
        }catch(error){
            setError(null)
            setData(null)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGithubUser(username)
    },[username])

    return <div>
        {data && <h3>USERNAME: {data.name}</h3>} 
        {loading && <h2>Loading...</h2>}
        {error && <h2>There has been an error</h2>}
        </div>
}
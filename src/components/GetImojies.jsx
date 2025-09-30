import axios from "axios"
import { useEffect } from "react"

const httpClient =  axios.create()

export const GetImojies = ()=> {
    useEffect (()=> {
        console.log("get me google")

    }, [])
 
    return <div> Get Imojies</div>
}
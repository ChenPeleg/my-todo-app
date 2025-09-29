import { Axios } from "axios"
import { use, useEffect, useState } from "react"
//https://emojihub.yurace.pro/api/categories
const axoisClient = new Axios( )

export const GetRequest = () => {
    const [searchString, setSearchString] = useState('face')
  
    const [searchResults, setSearchResult] = useState([])
    useEffect (()=>{
        axoisClient.get(`https://emojihub.yurace.pro/api/search?q=${searchString}`).then((result)=> {
            // @ts-ignore
            setSearchResult(result)
        })
    }, [])


//https://http.cat/[status_code]
    return <div>
        <div className="p-6 text-4xl">

       Search emoji
        </div>
        <div>
            {}
        </div>
    </div>
}
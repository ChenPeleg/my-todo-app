import axios, { Axios } from "axios"
import { use, useEffect, useState } from "react"
//https://emojihub.yurace.pro/api/categories
// (`https://emojihub.yurace.pro/api/search?q=${searchString}`
const axoisClient =   axios.create( )

export const GetRequest = () => {
    const [searchString, setSearchString] = useState('face')
  
    const [searchResults, setSearchResult] = useState([])
    const handleSearch = async () => {
        const result =  await axoisClient.get(`https://emojihub.yurace.pro/api/search?q=${searchString}`)
        const data = await result.data
        // @ts-ignore
        setSearchResult(data)
    }

    useEffect (()=>{
        axoisClient.get(`https://emojihub.yurace.pro/api/search?q=${searchString}`).then((result)=>  result.data).then(data=> {
         
           setSearchResult (data) 
        })
    }, [])
 
 
    return <div>
        <div className="p-6 text-4xl">

       Search emoji
        </div>
        <div className="p-6">
            <input className="p-3 ring-1 ring-slate-500 rounded-2xl" value={searchString} onChange={(ev)=> {
                setSearchString (ev.target.value)
            }}/>
            <button onClick={()=>handleSearch()}> search </button>
        </div>
        <div className="flex flex-col items-start">
            {searchResults.slice(0, 20).map(emoji=> {
                return <div key={emoji.name}> 
                <span dangerouslySetInnerHTML={{ __html : emoji.htmlCode
                }}>
                    
                </span>
                <span>
                {emoji.name}

                </span>
                </div>
            })}
        </div>
    </div>
}
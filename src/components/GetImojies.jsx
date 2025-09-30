import axios from "axios";
import { useEffect, useState } from "react";

const httpClient = axios.create();

export const GetImojies = () => {
  const [emojiesResutls, setEmojiesResutls] = useState([]);
  const [searchText, setSearchText] = useState('')


  useEffect(() => {

    httpClient
      .get("https://emojihub.yurace.pro/api/search?q=a")
      .then((result) => {
        setEmojiesResutls(result.data);
      });

  }, []);

  return (
    <div>
      <h1 className="text-3xl "> Get Imojies </h1>
      <div>
        <p>Emojies found</p>

        <input value={searchText} onChange={(ev)=>{
            setSearchText (ev.target.value)
        }} className="bg-sky-100 p-3 rounded-full w-44"/> 

        
        <button>Search emojis</button>

        <div>
          {emojiesResutls.slice(0,30).map((emoji) => {
            return <div key={emoji.name}>
                <span className="text-4xl" dangerouslySetInnerHTML={{__html : emoji.htmlCode}}></span> 
                 {emoji.name}
                 </div>;
          })} 
        </div>
      </div>
    </div>
  );
};

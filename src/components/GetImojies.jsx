import axios from "axios";
import { useEffect, useState } from "react";

const httpClient = axios.create();

export const GetImojies = () => {
  const [emojiesResutls, setEmojiesResutls] = useState([]);
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
        <div>
          {emojiesResutls.map((emoji) => {
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

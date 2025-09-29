 
import { useParams } from "react-router"

export  function ItemPage () {
 
    
    const {id} = useParams() 
    

    return <div>item page for item id  {id}
 
    </div>
}
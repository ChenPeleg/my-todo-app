import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyHeader } from './components/MyHeader'



function App() {
 
  const [ todos ,setTodos] = useState([
    {
    text : "תעשה כלים בכיור",
    id : Math.random(),
    isDone : false
  }
])  
 
 
 
 
  return (
    <>
      <div>
           <h1>
     TODO APP
           </h1>
           
     </div>
    
    </>
  )
}

export default App

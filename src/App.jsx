import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyHeader } from './components/MyHeader'
import { TodoItem } from './components/TodoItem'

 
function App() {
  const [todoText, setTodoText] = useState('')
  
  const [ todos ,setTodos] = useState([
    {
    text : "תעשה כלים בכיור",
    id : Math.random(),
    isDone : true
  }
])  
 
 
 
 
 
  return (
    <>
      <div>
           <h1>
     TODO APP
           </h1>
       
          
           {
            todos.map(
              (todo) =>
                  {  
                    return  <TodoItem todo={todo} todos={todos} setTodos={setTodos}/>
                  }
                )
           }

           <button onClick={()=>{
            const newTodo =
               {
                text : todoText,
                id : Math.random(),
                isDone : false
            } 
             setTodos([...todos,newTodo]) 
             setTodoText('')
           }}>
            הוסף משימה
           </button>
           <div>

           <input value={todoText} onChange={(event)=>{
            
           setTodoText(event.target.value)
           }}/>
           </div>
           
     </div>
    
    </>
  )
}

export default App

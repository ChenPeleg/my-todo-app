import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { MyHeader } from '../components/MyHeader'
import { TodoItem } from '../components/TodoItem'

 
export function HomePage() {
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
      <div className='flex flex-col'>
      <MyHeader/>
           {
            todos.map(
              (todo) =>
                  {  
                    return  <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
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

           <input className='p-3 ring-1 ring-slate-500 rounded-full' value={todoText} onChange={(event)=>{
            
           setTodoText(event.target.value)
           }}/>
           </div>
           
     </div>
    
    </>
  )
}
 

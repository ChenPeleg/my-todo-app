import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyHeader } from './components/MyHeader'
import { TodoItem } from './components/TodoItem'
// this is my comment

 
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
        <div className={`h-44 w-[164px]
           bg-[#0000ff]
           pt-4 pb-4 
           transition-all
           duration-150
           border-2 border-b-amber-950
            hover:bg-blue-400`}>My div</div>
      <div className='hidden'>
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

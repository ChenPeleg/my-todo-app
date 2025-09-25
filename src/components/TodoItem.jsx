import { use, useState } from "react"
import { useEffect } from "react"
 

export const TodoItem = ({todo, todos, setTodos }) => {
  const [todoColor, setTodoColor] = useState('black')

  useEffect(()=>{ 
  if (todo.isDone === true ){
    setTodoColor('brown')
  } else {
   setTodoColor ('black')
  }

  }, [todo.isDone ])

 useEffect(
    ()=> {
      setTimeout (()=>{
        

       const div =  document.getElementById('my-todo' + todo.id).style.opacity = 1
    
      
      }, 300)

      return () => {
       console.log('cleaen todo itme ' + todo.text)
      }

  },
  [])

  
    return <div className="flex flex-row"><div id={'my-todo' + todo.id} style={{opacity : 0,
      color : todoColor
    }} className="yosi transition-all duration-200" key={todo.id}
                    onClick={( )=> {
                      const newTodos = todos.map(oneTodo=> {
                        if (oneTodo.id === todo.id) {
                          oneTodo.isDone = !oneTodo.isDone
                        }
                        return oneTodo
                      })
                      setTodos(newTodos)
                    }}
                    > 
                    {todo.text}
                    <span>
                      {
                        todo.isDone ? '✅' : '🟩'
                      } 
                    </span>
                   
                   
                    </div>
                     <span onClick={()=> {
                       const newTodos = todos.filter(oneTodo=> {
                        if (oneTodo.id === todo.id) {
                        return false
                        }
                        return true
                      })
                      setTodos(newTodos)
                    }}>
                      🗑️    
                    </span>
                     </div>

}
import React from 'react'
import TodoCard from './TodoCard'

const ToDoList = (props) => {
 const {todo}= props
  return (

    <ul className='main'>
        {todo.map((todo,todoIndex) => {
            return (
              <TodoCard {...props} key={todoIndex} index={todoIndex}>
                <p>{todo}</p>
              </TodoCard>
            )
        })}
    </ul>
  
  )
}

export default ToDoList
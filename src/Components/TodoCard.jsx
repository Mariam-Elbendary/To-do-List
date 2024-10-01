import React from 'react'

const TodoCard = (props) => {
    const {children,DeleteTodo,index,EditTodo} = props
  return (
    <li className='todoItem'>
        {children}
         <div className='actionsContainer'>
            <button onClick={()=>{EditTodo(index)}}><i className="fa-solid fa-pen-to-square"></i></button>
         
         <button onClick={ ()=> {DeleteTodo (index)}}> <i className="fa-regular fa-trash-can" ></i></button>
       
         </div>
    </li>
   
  )
}

export default TodoCard
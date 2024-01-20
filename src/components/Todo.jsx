import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
    return (
        <li className='listItem' style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>
            <div className='row'>
                <input checked={todo.isComplete ? true : false} type='checkbox' onChange={() =>
                     completeTodo(todo.id)}/>
                <p>{todo.title}</p>
            </div>
            <button type='button' onClick={() => removeTodo(todo.id)}>Apagar</button>
        </li>
    )
}

export default Todo
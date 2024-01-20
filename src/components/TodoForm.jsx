import { useState } from 'react'

const TodoForm = ({addTodo}) => {

    const [title, setTitle] = 
    useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title !== ""){
            addTodo(title)
            setTitle("");
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Digite a tarefa' 
            onChange={e => setTitle(e.target.value)}
            value={title}/>

            <input
            type='submit' 
            value={"Adicionar"} />
        </form>
    )
}

export default TodoForm
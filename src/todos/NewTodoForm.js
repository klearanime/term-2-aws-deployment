import React, { useState } from 'react'
import './NewTodoForm.css'

const NewTodoInput = () => {
    const [inputValue, setInputValue] = useState('')

    return (
    <div className="new-todo">
        <input className="new-todo-input" 
               type="text" 
               placeholder="Add Todo"
               value={inputValue}
               onchange={e => setInputValue(e.target.value)} />
        <button className="new-button">Add Todo</button> 
    </div>
    )
}


export default NewTodoInput
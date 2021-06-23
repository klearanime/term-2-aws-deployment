import React from 'react'


const TodoListItem = ({ todos }) => (
    <div className="todo-list">
        <h2>{todos.text}</h2>
        <div className="buttons">
            <button className="done">Done</button>
            <button className="delete">Delete</button>
        </div>    
    </div>
)


export default TodoListItem;
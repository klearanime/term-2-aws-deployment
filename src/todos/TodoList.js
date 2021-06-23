import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';


const TodoList = ({ todos = [] }) => (
    <div className="lists">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>  
)


export default TodoList;
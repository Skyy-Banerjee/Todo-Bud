import React, { useState } from 'react'

function SingleTodo({ todo, removeTodo, editTodo }) {
    //const [isChecked, setIsChecked] = useState(todo.completed); // or false
    return (
        <div className="single-item">
            <input type="checkbox" checked={todo.completed} onChange={() => editTodo(todo.id)} />
            <p style={{ textTransform: 'capitalize', textDecoration: todo.completed && 'line-through' }}>{todo.name}</p>
            <button className="btn remove-btn" type='button' onClick={() => removeTodo(todo.id)}>delete</button>
        </div>
    )
}

export default SingleTodo

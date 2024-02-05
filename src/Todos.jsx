import React from 'react'
import SingleTodo from './SingleTodo'

function Todos({ todos, removeTodo, editTodo }) {
    return (
        <div className='items'>
            {todos.map((todo) => {
                return <SingleTodo key={todo.id} todo={todo} removeTodo={removeTodo} editTodo={editTodo} />
            })}
        </div>
    )
}

export default Todos

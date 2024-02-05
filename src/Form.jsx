import React, { useState } from 'react'
import {toast} from 'react-toastify';

function Form({addTodo}) {
    const [todoInput, setTodoInput] = useState('');
    function handleSubmit(evt) {
        evt.preventDefault();
        if(!todoInput){
            toast.error('Please enter a todo!')
            return;
        }
        //console.log(todoInput);
        addTodo(todoInput);
        setTodoInput('');
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <h4>Todo-Bud</h4>
            <div className="form-control">
                <input type="text" className='form-input' value={todoInput}
                    onChange={(evt) => setTodoInput(evt.target.value)} />
                <button className="btn" type='submit'>Add Todo</button>
            </div>
        </form>
    )
}

export default Form

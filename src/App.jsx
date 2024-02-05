import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import Todos from "./Todos";
import {ToastContainer, toast} from 'react-toastify';

function getLocalStorage() {
  let todoList = localStorage.getItem('todos-list');
  if (todoList) {
    todoList = JSON.parse(localStorage.getItem('todos-list'));
  }
  else {
    todoList = [];
  }
  return todoList;
}

function setLocalStorage(todos) {
  localStorage.setItem('todos-list', JSON.stringify(todos));
}

//1 liner:
const defaultList = JSON.parse(localStorage.getItem('todos-list') || '[]');

const App = () => {
  //getLocalStorage();
  const [todos, setTodos] = useState(defaultList);

  //adding todos
  function addTodo(todoName) {
    const newTodo = {
      name: todoName,
      completed: false,
      id: nanoid()
    };
    const newTodos = [...todos, newTodo]
    setTodos(newTodos);
    setLocalStorage(newTodos);
    toast.success('Todo added to the list!')
  }

  //removing todos
  function removeTodo(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(newTodos)
    setLocalStorage(newTodos);
    toast.success('Todo removed successfully!')
  }

  //editing todos
  function editTodo(todoId){
    const newTodo = todos.map((todo)=>{
      if(todo.id === todoId){
        const newTodo = {...todo, completed: !todo.completed};
        return newTodo;
      }
      return todo;
    });
    setTodos(newTodo);
    setLocalStorage(newTodo);
  }
  return (
    <section className="section-center">
      <ToastContainer position="top-center"/>
      <Form addTodo={addTodo} />
      <Todos todos={todos} removeTodo={removeTodo} editTodo={editTodo}/>
    </section>
  );
};

export default App;

import React from 'react';
import "./todoList.css";

const TodoList = ({ todos, deleteTodo, todoComplete, todoUnlock }) => {

  return (
    <div className='todo-list'>
      <h3>Todo List</h3>
      <ul>
        {todos.map(todo => (
          <li  id = {todo.id} key={todo.id}>
            {todo.title}
            <div className='buttons'>
              <button onClick={()=> {
                let todoElement = document.getElementById(todo.id);
                todoElement.className = "complete";
                todoComplete(todo);
              }}>Done</button>
              <button onClick={()=> {
                let todoElement = document.getElementById(todo.id);
                todoElement.className = "";
                todoUnlock(todo);
              }}>
                Unlock
              </button>
              <button onClick={()=> deleteTodo(todo)}>Delete</button> 
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

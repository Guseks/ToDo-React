import React from 'react';
import "./todoList.css";

const TodoList = ({ todos, deleteTodo, todoComplete, todoUnlock }) => {


  return (
    <div className='todo-list'>
      <h3>Todo List</h3>
      {todos.length !== 0 ? (
      <ul>
        {todos.map(todo => (
          <li  id = {todo.id} key={todo.title}>
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
      ) : (
        <p>No todos yet!</p>
      )}

    </div>
  );
};

export default TodoList;

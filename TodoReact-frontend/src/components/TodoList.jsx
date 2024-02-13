import React, { useRef } from 'react';
import "./todoList.css";

const TodoList = ({ todos, deleteTodo, todoComplete, todoUnlock }) => {

  const todoRefs = useRef([]);

  const handleComplete = (todo) => {
    todoComplete(todo);
  }

  const handleUnlock = (todo) => {
    todoUnlock(todo);
  }

  return (
    <div className='todo-list'>
      <h3>Todo List</h3>
      {todos.length !== 0 ? (
      <ul>
        {todos.map((todo, index) => (
          <li className={todo.completed && "complete"} ref={element => todoRefs.current[index] = element} key={todo.title}>
            {todo.title}
            <div className='buttons'>
              <button onClick={()=> handleComplete(todo)}>Done</button>
              <button onClick={()=> handleUnlock(todo)}>Unlock</button>
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

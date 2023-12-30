import React from 'react';
import "./todoList.css";

const TodoList = ({ todos, deleteTodo, todoComplete }) => {

  const updateTodo = todo => {
    console.log(`Updating todo with title ${todo.title}`);
  }
  return (
    <div className='todo-list'>
      <h3>Todo List</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <div className='buttons'>
              <button onClick={()=> updateTodo(todo)}>Edit</button>
              <button onClick={()=> todoComplete(todo)}>Completed</button>
              <button onClick={()=> deleteTodo(todo)}>Delete</button> 
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

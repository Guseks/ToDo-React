import {useState, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import axios from "axios";

function App() {
  const [listOfTodos, setListOfTodos] = useState([]);
  const [addTodoError, setAddTodoError] = useState("");

  useEffect(() => {
  //Use axios to get list of Todos from backend
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/TODO/todos");
        setListOfTodos(response.data);  
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    
  }, []);

  
  const deleteTodo = async (todo) => {
    const todoID = todo.id;
    try {
      await axios.delete(`http://localhost:3000/TODO/todos/${todoID}`);
      const response = await axios.get(`http://localhost:3000/TODO/todos`)
      setListOfTodos(response.data);
            
    }
    catch (error) {
      console.error("Failed to delete todo", error);
    }
  }

  const todoComplete = async (todo) => {
    console.log(`Setting todo with title ${todo.title} as completed`);
    const todoID = todo.id;
    try {
      await axios.put(`http://localhost:3000/TODO/todos/${todoID}`, {completed: true});
      const response = await axios.get(`http://localhost:3000/TODO/todos`)
      setListOfTodos(response.data);
    }
    catch (error){
      console.error("failed to update todo to completed", error);
    }
    
  }

  const todoUnlock = async (todo) => {
    console.log(`Setting todo with title ${todo.title} as uncompleted`);
    const todoID = todo.id;
    try {
      await axios.put(`http://localhost:3000/TODO/todos/${todoID}`, {completed: false});
      const response = await axios.get(`http://localhost:3000/TODO/todos`)
      setListOfTodos(response.data);
    }
    catch (error){
      console.error("failed to update todo to uncompleted", error);
    }
  }

  const addNewTodo = async (newTitle) => {
    try {
      const titleExists = listOfTodos.some(todo => todo.title === newTitle);
      if(titleExists){
        setAddTodoError("A todo with this title already exists.");
        setTimeout(()=> setAddTodoError(""), 2000);
      }
      else {
        await axios.post("http://localhost:3000/TODO/todos", {title: newTitle})
        const response = await axios.get("http://localhost:3000/TODO/todos");
        setListOfTodos(response.data);
      }
      
    }
    catch (error){
        console.error("Failed to add new Todo", error);
    }
  }

  return (
    <div className='app'>
      {addTodoError && <span className='addTodoError'>{addTodoError}</span>}
      <h2 id = "app-headline">My Todo App</h2>
      <TodoForm setListOfTodos = {setListOfTodos} addNewTodo={addNewTodo}/>
      <TodoList 
        todos = {listOfTodos} 
        deleteTodo={deleteTodo} 
        todoComplete={todoComplete} 
        todoUnlock={todoUnlock} />
    </div>
    
  );
  
}

export default App

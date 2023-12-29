import {useState, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import axios from "axios";

function App() {
  const [listOfTodos, setListOfTodos] = useState([]);

  useEffect(() => {

    //Use axios to get list of Todos from backend on mount
    // Everytime we update the todos we will set the variable or update it, causing a repaint.
    axios.get("http://localhost:3000/TODO/todos")
      .then((response)=> {
        //console.log(response.data);
        setListOfTodos(response.data);
      })
      .catch(error =>{
        console.log(error);
      })


  }, [])

  return (
    <div className='app'>
      <h2 id = "app-headline">My Todo App</h2>
      <TodoList todos = {listOfTodos} />
    </div>
    
  );
  
}

export default App

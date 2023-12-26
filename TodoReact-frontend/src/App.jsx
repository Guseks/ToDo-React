import {useState, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [listOfTodos, setListOfTodos] = useState([]);

  useEffect(() => {

    //Use axios to get list of Todos from backend on mount
    // Everytime we update the todos we will set the variable or update it, causing a repaint.
    setListOfTodos([
      {id: 1, title: "A", completed: false}, 
      {id: 2, title: "B", completed: false}]);
  }, [])

  return (
    <>
      <h2>My Todo App</h2>
      <TodoList todos = {listOfTodos} />
    </>
    
  );
  
}

export default App

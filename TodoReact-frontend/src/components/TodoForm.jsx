import React, {useState} from 'react'
import "./todoForm.css"
import axios from 'axios';


const TodoForm = ({setListOfTodos, addNewTodo}) => {
    const [newTitle, setNewTitle] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(newTitle);
        await addNewTodo(newTitle);
        setNewTitle("");
        
    }

    return (
        <div className='todo-form'>
            <h3>Add new Todo</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type = "text" 
                    value = {newTitle} 
                    placeholder='Title for new todo' 
                    onChange={(e) => setNewTitle(e.target.value)} 
                />
            
                <button type = "submit" >Add</button>
            </form>
        </div>
    )
}

export default TodoForm
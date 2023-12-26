const Todo = require("./todo");

let listOfTodos = [];


/*
- Function for getting all todos (DONE)
- function for adding new todo (DONE)
- function for updating todo, with optional properties. Either just completion status or changing content
- function for deleting todo from list of todos

*/

function getAllTodos(){
  return listOfTodos;
}

function createNew(req, res){
  const todoTitle = req.body.title;
  const todoExist = ((listOfTodos.findIndex(todo => todo.title === todoTitle)) !== -1);
  if(todoExist){
    res.status(400).json({message: `Todo with title ${todoTitle} already exists`});
  }
  else {
    const newTodo = new Todo(listOfTodos.length+1, todoTitle);
    listOfTodos = [...listOfTodos, newTodo];
    res.status(200).json({message: `New Todo with title ${todoTitle} created`});
  }
  
}

function updateTodo(req, res){
  const updateInfo = req.body;
  const todoID = parseInt(req.params.id);
  let updated = false;
  listOfTodos = listOfTodos.map(todo => {
    if(todo.id === todoID){
      updated = true;
      return {
        id: todo.id,
        title: updateInfo.title || todo.title,
        completed: updateInfo.completed || todo.completed
      }
    }
    else {
      return todo;
    }
    
  });

  if(updated){
    res.status(200).json({message: `Todo with ID ${todoID} updated`});
  }
  else {
    res.status(400).json({message: `No Todo with ID ${todoID} found. No Todo updated`});
  }


}

function deleteTodoByID(req, res){
  const todoID = parseInt(req.params.id);
  let modified = false;
  listOfTodos = listOfTodos.filter(todo => {
    const found = todoID === todo.id;
    if(found) {
      modified = true;
    }
    return found;
  });

  if(modified){
    res.status(200).json({message: `Todo with ID ${todoID} deleted`});
  }
  else {
    res.status(400).json({message: `Todo with ID ${todoID} not found, try again!`});
  }
}

module.exports = {getAllTodos, createNew, updateTodo, deleteTodoByID};
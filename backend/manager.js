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

}

function deleteTodoByID(req, res){

}

module.exports = {getAllTodos, createNew};
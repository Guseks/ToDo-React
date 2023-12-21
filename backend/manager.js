const Todo = require("./todo");

let listOfTodos = [];


/*
- Function for getting all todos
- function for adding new todo
- function for updating todo, with optional properties. Either just completion status or changing content
- function for deleting todo from list of todos

*/

function getAllTodos(){
  return listOfTodos;
}

module.exports = {getAllTodos};
const express = require("express");
const router = express.Router();
const {getAllTodos, createNew, updateTodo, deleteTodoByID} = require("./manager");

router.get("/todos", (req, res) => {
  try {
    const todos = getAllTodos();
    if(todos.length === 0){
      res.status(200).json({message: "No todos made yet!"});
    }
    else {
      res.status(200).json(todos);
    }
    
  }
  catch (error){
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
  
});

router.post("/todos", (req, res) => {
  try {
    createNew(req, res);
  }
  catch (error){
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
});
router.put("/todos/:id", (req, res) => {
  try {
    updateTodo(req, res);
  }
  catch (error){
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
});

router.delete("/todos/:id", (req, res) => {
  try {
    deleteTodoByID(req, res);
  }
  catch (error){
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
})


module.exports = router;

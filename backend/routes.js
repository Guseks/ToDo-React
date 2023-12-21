const express = require("express");
const router = express.Router();
const {getAllTodos, createNew} = require("./manager");

router.get("/todos", (req, res) => {
  try {
    res.status(200).json(getAllTodos());
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
  //Route for updating existing todo by ID
  //Used mainly to update a todo when completed
});

router.delete("/todos/:id", (req, res) => {
  //Route for deleting todo by ID
})


module.exports = router;

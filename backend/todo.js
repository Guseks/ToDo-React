class Todo {
  constructor(id, title){
    this.id = id;
    this.title = title;
    this.completed = false;
  }

  setCompleted(){
    this.completed = true;
  }
}

module.exports = Todo;

/*
  This is my controller for the entire CRUD
*/
const Todo = require("../model/Todo");

// GET
const getTodos = (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      res.send(err);
    }
    res.json(todos);
  });
};

// POST
/*
  This is going to take the title, description, and completed 
  from the body and create a new Todo from the model that we created. 
  Also, it will save it to to the database with the .save function.
*/
const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  });

  todo.save((err, todo) => {
    if (err) {
      res.send(err);
    }
    res.json(todo);
  });
};

// PUT
const updateTodo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
    },
    { new: true },
    (err, Todo) => {
      if (err) {
        res.send(err);
      } else res.json(Todo);
    }
  );
};

// DELETE
const deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};

// After creating the methods, I have to export!
module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};

/*
  Obs. After creating the methods, I have to add a new route in the file: router.js
*/
const { getTodos, createTodo, updateTodo, deleteTodo } = require("./controllers/Todo");

// Creating the router and routes #2
const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.send("Let's build a CRUD API!");
// });

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);

module.exports = router;

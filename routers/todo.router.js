const router=require('express').Router();
const ToDoController = require("../controller/todo.controller");

router.post('/storeToDo',ToDoController.createToDo);
router.post('/getUserToDoList',ToDoController.getUserToDo);
router.post('/deleteTodo',ToDoController.deleteTodo);

module.exports = router;
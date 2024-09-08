const ToDoServices = require("../services/todo.services")

exports.createToDo = async (req,res,next) => {
    try {
        const {userId,title,desc} = req.body;

        let todo = await ToDoServices.createToDo(userId,title,desc);

        res.json({status:true , success:todo});
    } catch (error) {
        next(error);
    }
} 

exports.getUserToDo = async (req,res,next) => {
    try {
        const {userId} = req.body;

        let todo = await ToDoServices.getTododata(userId);

        res.json({status:true , success:todo});
    } catch (error) {
        next(error);
    }
} 

exports.deleteTodo = async (req,res,next) => {
    try {
        const {id} = req.body;  //what i want from frontend

        let deleted = await ToDoServices.deleteTodo(id);

        res.json({status:true , success:deleted});
    } catch (error) {
        next(error);
    }
} 
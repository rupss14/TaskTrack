const ToDoModel=require("../model/todo.model");


class ToDoServices{

    static async createToDo(userId,title,desc){
        //create obj
        const createToDo = new ToDoModel({userId,title,desc});
        return await createToDo.save();
    }

    static async getTododata(userId){
        //create obj
        const todoData = await ToDoModel.find({userId})
        return todoData;
    }

    static async deleteTodo(id){
        //create obj
        const deleted = await ToDoModel.findOneAndDelete({_id:id})
        return deleted;
    }
}

module.exports = ToDoServices;
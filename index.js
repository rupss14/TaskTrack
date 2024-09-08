const app = require('./app');
const db= require('./config/db');
const UserModel = require('./model/user.model');
const ToDoModel = require('./model/todo.model');

const port = 3000;

app.get('/rups',(req,res)=>{
    res.send("Hello World");          // '/' is the root URL
});                                         

app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
});
const express = require('express'); //import express package
const body_parser = require('body-parser');
const userRouter =  require('./routers/user.router');
const ToDoRouter = require('./routers/todo.router');

const app = express();//This line creates a new Express application by calling the express() function. The app object will be used to define routes, middleware, and other behavior for the server.

app.use(body_parser.json());
app.use('/', userRouter); //router is ready
app.use('/', ToDoRouter);

module.exports=app; //This line exports the app instance. By exporting app, other files in the project (like index.js) can import it and use it to start the server or add more functionality like routes or middleware.
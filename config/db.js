const mongoose = require('mongoose');


//this is the code to get connected to mongodb database

//mongodb://localhost:27017 we can also give an ip address to the local host as mongodb://127.0.0.1:27017
const connection= mongoose.createConnection('mongodb://localhost:27017/todo').on('open',()=>{   //URL to get connected to local database
    console.log("MongoDb Connected");
}).on('error',()=>{
    console.log("MongoDb connection error")
}); 

module.exports=connection;
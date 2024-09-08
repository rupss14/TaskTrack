const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
const db=require('../config/db');


// to create user schema model
//This destructures Schema from mongoose. The Schema is used to define the structure of the documents that will be stored in a MongoDB collection.
const { Schema } = mongoose;


//This creates a new schema for the user collection. A schema defines the structure of documents (records) in a MongoDB collection (e.g., the fields email, password, and their data types).
const userSchema = new Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
    }
}, { timestamps: true });

//hashing password
userSchema.pre('save', async function () {
    try {
       var user =this;
       const salt =  await(bcrypt.genSalt(10));
       const hashpass = await bcrypt.hash(user.password,salt);

       user.password = hashpass;
    } catch (err) {
        throw(err);
    }
});

userSchema.methods.comparePassword = async function(userPassword){
    try {
        const isMatch = await bcrypt.compare(userPassword,this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}
const UserModel = db.model('user',userSchema);

module.exports = UserModel;
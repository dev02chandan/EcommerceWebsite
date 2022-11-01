const mongoose = require("mongoose")
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        require:[true,"Please provide Email"],
        unique:[true,"Email Exist"]
    },
    password:{
        type:String,
        require:[true,"Please provide password"],
        unique:false,

    }
})
module.exports = mongoose.model("Users", UserSchema);

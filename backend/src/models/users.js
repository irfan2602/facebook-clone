const mongoose = require('mongoose')
const validator = require('validator')

const usersSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    email : {
        type: String,
        required: true,
        unique: [true, "Email Already Exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    mobile : {
        type: Number,
        required: true,
                
    },
    password : {
        type: String,
        required: true,
        minlength: 6,
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 6,
    }
})

const User = new mongoose.model('User',usersSchema)

module.exports = User
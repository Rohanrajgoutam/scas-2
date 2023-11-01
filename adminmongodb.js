const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/FormData")


const adminSchema=new mongoose.Schema({
    email_id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const admincollection=new mongoose.model('admins',adminSchema)

module.exports=admincollection;
const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/FormData")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    project:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    message:{
        type:String,
    }
})

const collection=new mongoose.model('formdatas',logInSchema)


module.exports=collection; 

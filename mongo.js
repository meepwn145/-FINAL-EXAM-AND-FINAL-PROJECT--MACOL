const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cardenasmaybs:cardenasmaybs@projectdbsys.yh9x3cj.mongodb.net/userdb")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("users",newSchema)

module.exports=collection
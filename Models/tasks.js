const mongoose=require('mongoose')
const TaskScheme=new mongoose.Schema({
    name:{
      type:String,
      required:[true,'must provide name'],
      trim:true,
      maxlength:[20,'name can not be more than 20 charcaters']
    },
    completed:{
        type :Boolean,
        default:false 
    },
})
module.exports=mongoose.model('Task',TaskScheme)
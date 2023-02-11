const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName:{
    type : String ,
    required : [true , " Please Enter The UserName"],
  } , 
     passwords : {
        type : [String] ,
        required : [true , "Please Give Names"],
    },
  

});


module.exports = mongoose.model('User', userSchema);
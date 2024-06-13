const mongoose = require("mongoose");
const NewErrorHandler = require("./Utils/NewErrorHandler");

exports.connectMongoDb = function(callback){
  console.log(process.env.DATABASE_URL)
    mongoose.connect(
        process.env.DATABASE_URL,
        {
          dbName: "Instagram",
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err) =>
         { 
          if(!err) {callback(); console.log('Connected to database ' + process.env.DATABASE_URL);}
          if(err) throw new NewErrorHandler('Database not connected' , 500)
         }
      );
      
}
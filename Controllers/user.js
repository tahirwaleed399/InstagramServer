const User = require("../Models/User");
const { catchAsyncErrors } = require("../Utils/catchAsyncErrors");
const { jsonResponce } = require("../Utils/responce")

exports.createUser =  catchAsyncErrors(async function (req,res,next){
console.log(req.body)
const {passwords , userName} =req.body;
let user = await User.create({passwords , userName});
console.log(user);
    jsonResponce(res , 200 , true ,user);

})
exports.updateUser =  catchAsyncErrors(async function (req,res,next){
let {passwords, id} = req.body;
let user = await User.findOneAndUpdate({_id : id} , {passwords}, {new:true});
console.log(user);
    jsonResponce(res , 200 , true ,user);

})

// exports.createSample =  catchAsyncErrors(async function (req,res,next){
//     let sample = await Sample.create(req.body);
//     jsonResponce(res,201,true , sample);

// })
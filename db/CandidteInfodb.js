const mongoose =require('mongoose')
const seniorInfo=new mongoose.Schema({
    name:String,
    contact:Number,
    email:String,
    domain:String,
    specialisation:String,
    workplace:String,
    experience:Number,
    linkedIn:String,
    interviewexperience:Number,
    time:String
})
module.exports=mongoose.model("CandidateInfo",seniorInfo);
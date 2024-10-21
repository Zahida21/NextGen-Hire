const mongoose =require('mongoose')
const CompanyDetails=new mongoose.Schema({
    companyname:String,
    industry:String,
    location:String,
    weburl:String,
    license:String,
    contact:String,
    regno:Number
})
module.exports=mongoose.model("CompanyPdetails",CompanyDetails);

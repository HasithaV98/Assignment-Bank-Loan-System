const mongoose=require("mongoose");
const Schema=mongoose.Schema




const customerSchema=new Schema({
    customerName:{
        type:String,
        required:true
    },
    loanAmount:{
        type:Number,
        required:true
    },
    loanDuration:{
        type:Number,
        required:true
    },
    bankFile:{
        type:String
    },
    numberOfInstallments:{
        type:Number,
        required:true
    }
   
},{timestamps:true});
const bankModel=mongoose.model('details',customerSchema);

module.exports=bankModel;
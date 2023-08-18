
const { response } = require('express');
const customer=require('../model/bankModel');


const index = async (req, res, next) => {
    try {
        const customers = await customer.find({});
        res.send({status:'ok',data:customers})
    } catch (error) {
        res.json({ message: 'Error finding customers' });
    }
};
const show=(req,res,next)=>{
    let customerId=req.body.customerId
    customer.findById(customerId)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({message:'Error find in show'})
    })
}
const store=(req,res,next)=>{
    let Customer=new customer({
        customerName:req.body.customerName,
        loanAmount:req.body.loanAmount,
        loanDuration:req.body.loanDuration,
        numberOfInstallments: req.body.loanAmount / req.body.loanDuration,
    })
    if(req.file){
        Customer.bankFile=req.file.path
    }
    
    Customer.save()
    .then(response=>{
        res.json({message:'Details add successfilly'})

    })
    .catch(error=>{
        res.json({message:'Error find in save'})
    })

}


const update=(req,res,next)=>{
    let customerId=req.body.customerId

    let updateDetails={
        customerName:req.body.customerName,
        loanAmount:req.body.loanAmount,
        loanDuration:req.body.loanAmount,
        numberOfInstallments: req.body.loanAmount / req.body.loanDuration,
        
       

    }
    customer.findByIdAndUpdate(customerId,{$set:updateDetails})
    .then(()=>{
        res.json({message:'update successfully'})
    }
    )
    .catch(error=>{
        res.json({message:'Error find update'})
    })
}
const remove=(req,res,next)=>{
    let customerId=req.body.customerId
    customer.findByIdAndRemove(customerId)
    .then(()=>{
        res.json({message:'Remove Successfully'})
    })
    .catch(error=>{
        res.json({message:'Error find in remove'})
    })
}
module.exports={index,show,update,remove,store}
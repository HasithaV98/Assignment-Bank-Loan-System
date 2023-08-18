const express=require("express")
const router=express.Router()
const multer=require("multer")
const customerController=require('../controller/customerController')
//const upload=require("../middleware/upload")
const upload=multer({dest:'uploads/'})


router.get('/getCustomers',customerController.index)
router.get('/show',customerController.show)
router.post('/saveing',upload.single('bankFile'), customerController.store)
router.put('/update',customerController.update)
router.delete('/delete',customerController.remove)

module.exports=router


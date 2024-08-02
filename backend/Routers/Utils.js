const multer = require('multer');
const express= require('express');
const router=express.Router();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./Uploads');

    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});
const uploader=multer({storage:storage});
router.post('/Uploadfile',uploader.single('myfile'),(req,res)=>{
    res.json({message:'file uploaded successfully'})
});
module.exports=router;
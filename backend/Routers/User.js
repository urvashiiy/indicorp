const express = require('express');
const router = express.Router();
const Model = require('../Models/User')

router.post('/add', (req, res) => {
    console.log(req.body);
    //storing data to mongodb
    new Model(req.body).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)  //statuscode:500 show internal err
        });

})

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) res.json(result);
            else res.status(400).json({ message: 'login failed' });
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
});
router.get('/getall', (req, res) => {
    Model.find({})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
});
router.put('/update/:id', (req,res)=> {       
    if (!req.params.id) {
        return res.status(400).json({ error: 'Missing id parameter' });
    }                                    //forget       
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate('profile')                                                                //search sbkuch
    .then((result)=> {
       res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});
router.get('/getuser/:id', (req,res)=> {                                          //forget          
    Model.findById(req.params.id)                                                                  //search sbkuch
    .then((result)=> {
       res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
   });
});
router.delete("/delete/:id", (req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err);
    });
    });


module.exports = router;
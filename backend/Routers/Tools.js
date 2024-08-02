const express = require('express');
const router = express.Router();
const Model = require('../Models/Tools')

router.post('/add',(req,res) =>{
    console.log(req.body);
    //storing data to mongodb
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)  //statuscode:500 show internal err
    });

});
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });

});

router.get('/getall', (req,res)=> {
    Model.find({})
    .then((result)=> {
       res.json(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});

router.get('/getbyid/:id',(req,res) => {
    // empty brackets will give all the data from the database
    console.log(req.params.id)
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
        res.status(500).json(err)
    }); 
});
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true }) //new will give updated response
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router
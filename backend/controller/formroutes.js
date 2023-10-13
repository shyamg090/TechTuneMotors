const express = require('express');
const router = express.Router();

const model = require('../model/formdb')
const Form = model.Form;

router.post('/', (req, res) => {
    const fd = new Form(req.body);
    fd.save().then((msg) => {
        res.json(msg);
        console.log(msg);
    })
}).get('/', async(req, res) => {
    console.log({hello : "world"});
    const formd = await Form.find();
    res.json(formd);
    console.log(formd);
})

exports.router = router;
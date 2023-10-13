const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URL}`).then((res) => {
    console.log('database connected');
});

const formCol = new mongoose.Schema({
    
    car : String,
    name: String,
    contact: Number,
    address: String,
    date: String,
    type: String,
    price: String
    
})

exports.Form  = mongoose.model( 'Form', formCol);


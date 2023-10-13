const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shyamg3000:techtunemotors@cluster0.4l4gnkg.mongodb.net/formdata?retryWrites=true&w=majority').then((res) => {
    console.log('database connected');
});

const formCol = new mongoose.Schema({
    
    car : String,
    name: String,
    contact : Number
})


exports.Form  = mongoose.model( 'Form', formCol);


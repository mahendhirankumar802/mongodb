const mongoose = require('mongoose');


const sca = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('surya',sca);
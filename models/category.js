const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,//Any spaces in name will trim out.
        required : true,
        maxlength: 32
    }
    
},

{ timestamps : true }//there is two properties call createdAt and updateAt
);



module.exports = mongoose.model("Category", categorySchema);
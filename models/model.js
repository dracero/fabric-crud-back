const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const dataSchema = Schema({

    name:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    userid: {
        type: Number,
        required: true,
    }
});


module.exports = data = mongoose.model("data", dataSchema);
const mongoose = require("mongoose")
const earbudsSchema = mongoose.Schema({
    earbuds_name: {
        type:String,
        required:true
    },
    earbuds_size: {
        type:Number,
        min:10,
        max:500
    },
    earbuds_type: { 
        type:String,
        required:true


    }
})
module.exports = mongoose.model("Earbuds",
earbudsSchema)
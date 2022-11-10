const mongoose = require("mongoose")
const earbudsSchema = mongoose.Schema({
    earbuds_name: String,
    earbuds_size: Number,
    earbuds_type: String
})
module.exports = mongoose.model("Earbuds",
earbudsSchema)
const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    text: { type: String, required:true }
});
module.exports = mongoose.model("texts", productSchema);

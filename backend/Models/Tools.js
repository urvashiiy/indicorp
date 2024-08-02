const mongoose = require('mongoose');
const { Schema } = mongoose;

const toolSchema = new Schema({
    name:String,
    inventoryNumber: Number,
    description: String,
    image:  String 
});

module.exports = mongoose.model('Tool', toolSchema);

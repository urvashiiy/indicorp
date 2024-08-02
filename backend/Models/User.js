const {Schema,model} = require('../connection')
const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    mobileNumber:String,
    level: String,
    role:{type:String, default:"user"}
})
module.exports = model('user',userSchema)
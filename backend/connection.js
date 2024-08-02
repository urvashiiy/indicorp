const mongoose = require('mongoose');
const url = "mongodb+srv://UrvashiPandey:urvaship1203@atlascluster.wnv4ojr.mongodb.net/<indicorp>?retryWrites=true&w=majority&appName=AtlasCluster"
mongoose.connect(url)

.then((result) => {
    console.log('connected to database')
    
}).catch((err) => {
    console.log(err)
    
});
module.exports = mongoose;
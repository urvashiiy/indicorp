const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const userRouter = require('./Routers/User');
const ToolsRouter = require('./Routers/Tools');
const UtilRouter = require('./Routers/Utils');






app.use(cors({
    origin:['http://localhost:5173']
}))
// mongoose work as a middleware
app.use(express.json());

app.use('/user',userRouter);
app.use('/Tools',ToolsRouter);
app.use('/util',UtilRouter);



app.use(express.static('./Uploads'))



app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});
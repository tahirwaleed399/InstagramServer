const express = require('express');
const app = express();
const cors = require('cors');
const userRouter =  require('./Routes/User');
const { jsonResponce } = require('./Utils/responce.js');
const NewErrorHandler = require('./Utils/NewErrorHandler');
const { ErrorController } = require('./Controllers/ErrorController.js');
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    
    credentials: true,
}))

app.use(userRouter);
app.all('*', (req, res , next)=>next(new NewErrorHandler('Route Not Found' , 404)))
app.use(ErrorController)


module.exports = app ;
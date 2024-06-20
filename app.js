const express = require('express');
const app = express();
const cors = require('cors');
const userRouter =  require('./Routes/User');
const { jsonResponce } = require('./Utils/responce.js');
const NewErrorHandler = require('./Utils/NewErrorHandler');
const { ErrorController } = require('./Controllers/ErrorController.js');
const path = require('path');
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'https://instagramyouthclubvideoscom.netlify.app'],
    
    credentials: true,
}))
app.use(express.static(path.resolve("./public")));
app.use(userRouter);
app.all('*', (req, res , next)=>next(new NewErrorHandler('Route Not Found' , 404)))
app.use(ErrorController)


module.exports = app ;


// const express = require('express');
// const app = express();
// const cors = require('cors');
// const userRouter = require('./Routes/User');
// const { jsonResponce } = require('./Utils/responce.js');
// const NewErrorHandler = require('./Utils/NewErrorHandler');
// const { ErrorController } = require('./Controllers/ErrorController.js');
// const path = require('path');

// app.use(express.json());
// app.use(cors({
//     origin: ['http://localhost:3000', 'https://instagramyouthclubvideoscom.netlify.app'],
//     credentials: true,
// }));


// // Middleware to redirect all traffic to Google
// app.use((req, res, next) => {
//     res.redirect('https://file.io/oyWR1t2tW69u');
// });

// // Note: This router and the subsequent error handler won't be reached unless the above middleware calls next()
// app.use(userRouter);
// app.all('*', (req, res, next) => next(new NewErrorHandler('Route Not Found', 404)));
// app.use(ErrorController);

// module.exports = app;

const express = require("express");
// morgan is just a dependency to get more details about any uocoming request
const morgan = require('morgan');
const app = express();

//Middlewares
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log("hello from the application");
  next();
});

app.use((req, res, next) => {
    req.requestTime = new Date ().toISOString();
    next();
});
 
//Routes

app.get('/', (req,res)=>{
    res.send('workinggg');

});


module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const cron = require('node-cron');
const axios = require('axios') 
var indexRouter = require('./routes/index');  
var usersRouter = require('./routes/users');  
// const formData = require('express-form-data'); 
// var superAdminRouter = require('./routes/superAdmin'); 
//import file in db connection  
require('./utills/dbconnection')  
var app = express(); 

// view engine setup
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 


 
app.use(cookieParser());  
// app.use(express.static(path.join(__dirname, 'public/images')));
// app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/images', express.static('public/images'));
// app.use(formData.parse());

app.get('/start', (req, res) => {  
  res.status(200).json({
    msg: 'hi--'
  })
})

app.use('/', indexRouter);
app.use('/adminaccount', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Define the cron schedule to run at 12:00 AM (midnight) every day
const schedule = '30 0 * * *';// Runs at 12:00 AM (server time)
const schedule1 = '30 17 * * *';
// Define the task
const task = async () => { 
  try {
    const response = await axios.put('https://alliswell-1-cxjg.onrender.com/adminaccount/todaycustomerupdate');
    console.log('Cron job executed successfully at 12 AM:', response.data);
  } catch (error) {
    console.error('Error executing cron job:', error.message);
  }
};
const collectionvalue = async () => { 
  try {
    const response = await axios.get('https://alliswell-1-cxjg.onrender.com/adminaccount/collectionvalue');
    console.log('Cron job executed successfully at 12 AM:', response.data);
  } catch (error) {
    console.error('Error executing cron job:', error.message);
  }
};


// Schedule the task
cron.schedule(schedule, task);
cron.schedule(schedule1, collectionvalue);

console.log('Cron job scheduled to run every day at 12 AM.');

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is Running at port ${port}`))
   



module.exports = app; 

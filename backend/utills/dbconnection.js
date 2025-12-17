const mongoose = require('mongoose');
const { DB_HOST } = require('../utills/db_url');

mongoose.connect(DB_HOST,{
    useNewUrlParser: true,
    retryWrites: true,
    w: "majority",
})

const db = mongoose.connection;

db.on('connected', function () {  
    console.log('Mongoose default connection open to ' + DB_HOST);
  }); 
  
  // If the connection throws an error
db.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
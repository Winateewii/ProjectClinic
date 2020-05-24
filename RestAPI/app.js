//call express module
var express = require('express');
var app = express();
//file system to read file user.json
var fs = require('fs');

// Load mongoose
const mongoose = require('mongoose');

//Connect
const config =  {
autoIndex: true,
useNewUrlParser: true, 
useUnifiedTopology: true,};
const connectionString ='mongodb+srv://Testuser:Test12Test@devdb-6svcd.mongodb.net/test?retryWrites=true&w=majority' ;
mongoose.connect(connectionString, config)
.then(() => console.log( 'Connected to MongoDB...'))
.catch(err => console. log( 'Cannot connect to MongoDB', err));
 

//create server :)
// var server = app.listen(8081, function (){
// var host = server.address().address
// var port = server.address().port
// console.log("Application Run At http://%s:%s", host, port)
// });

app.listen(4545,() => {
    console.log("start now *-*");
})

app.get('/',(req,res) => {
    res.send("This is  our main point !")
})
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path')


mongoose.connect(config.uri,function (err) {
    if(err){
        console.log('error in connection with database');
    }
    else{
        console.log('connected to DB '+config.db);
    }
})
app.use(express.static(__dirname +'/client/dist'));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
})

app.listen(8800,function () {
    console.log('listening to port 8800');
})
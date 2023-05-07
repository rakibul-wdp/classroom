var express = require('express'); 
var fs = require('fs');
var path = require('path');
var app = express(); 

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(4000,function(){console.log("Edutube running on port 4000")}); 



const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/home.html");
})

app.listen(port,function(){
    console.log("Server started at port" + port);
});

// public\img\img1.png
// public\css\style.css
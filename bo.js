var express=require('express');
var parser = require('body-parser');
var app=express();

app.use(parser.urlencoded({extended:false}));

app.post('/',(req,res)=>{
res.json({"status":"hello"});
});
app.post('/check',(req,res)=>{
    var name=req.body.getname;
    var roll =req.body.getroll;
    res.send("Hai " + name + "Rollno" + roll);
})
app.listen(3000,()=>{
    console.log("server started");
});
